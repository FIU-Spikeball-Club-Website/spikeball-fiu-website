// store/email_store.go
package store

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"sync"
	"time"
)

// EmailEntry represents a validated email with timestamp
type EmailEntry struct {
	Email     string `json:"email"`
	Domain    string `json:"domain"`
	Timestamp string `json:"timestamp"`
	Valid     bool   `json:"valid"`
}

// EmailStore defines the interface for email storage operations
type EmailStore interface {
	SaveEmail(email, domain string, isValid bool) error
	GetAllEmails() ([]EmailEntry, error)
	EmailExists(email string) (bool, error)
}

// FileEmailStore implements EmailStore using file-based storage
type FileEmailStore struct {
	filePath string
	mutex    sync.Mutex // For safe concurrent access
}

// NewFileEmailStore creates a new file-based email store
func NewFileEmailStore(filePath string) (*FileEmailStore, error) {
	// Create directory if it doesn't exist
	dir := strings.TrimSuffix(filePath, "/emails.csv")
	if _, err := os.Stat(dir); os.IsNotExist(err) {
		if err := os.MkdirAll(dir, 0755); err != nil {
			return nil, fmt.Errorf("failed to create data directory: %w", err)
		}
	}
	
	return &FileEmailStore{
		filePath: filePath,
	}, nil
}

// SaveEmail saves a new email entry to the file
func (s *FileEmailStore) SaveEmail(email, domain string, isValid bool) error {
	s.mutex.Lock()
	defer s.mutex.Unlock()
	
	// Check if email already exists
	exists, err := s.emailExistsUnlocked(email)
	if err != nil {
		return err
	}
	if exists {
		return fmt.Errorf("email '%s' already exists in the database", email)
	}
	
	// Open file in append mode, create if it doesn't exist
	file, err := os.OpenFile(s.filePath, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		return fmt.Errorf("failed to open emails file: %w", err)
	}
	defer file.Close()
	
	// Format: email,domain,timestamp,valid
	timestamp := time.Now().Format(time.RFC3339)
	
	// Write to file
	_, err = file.WriteString(fmt.Sprintf("%s,%s,%s,%t\n", 
		email, domain, timestamp, isValid))
	if err != nil {
		return fmt.Errorf("failed to write to file: %w", err)
	}
	
	return nil
}

// GetAllEmails reads all emails from the file
func (s *FileEmailStore) GetAllEmails() ([]EmailEntry, error) {
	s.mutex.Lock()
	defer s.mutex.Unlock()
	
	return s.getAllEmailsUnlocked()
}

// getAllEmailsUnlocked reads emails without locking (for internal use)
func (s *FileEmailStore) getAllEmailsUnlocked() ([]EmailEntry, error) {
	// Check if file exists
	if _, err := os.Stat(s.filePath); os.IsNotExist(err) {
		// File doesn't exist yet, return empty list
		return []EmailEntry{}, nil
	}
	
	// Open the file
	file, err := os.Open(s.filePath)
	if err != nil {
		return nil, fmt.Errorf("failed to open emails file: %w", err)
	}
	defer file.Close()
	
	// Read and parse the file
	var entries []EmailEntry
	scanner := bufio.NewScanner(file)
	
	for scanner.Scan() {
		line := scanner.Text()
		parts := strings.Split(line, ",")
		
		if len(parts) >= 4 {
			// Parse the boolean value
			valid := false
			if parts[3] == "true" {
				valid = true
			}
			
			entry := EmailEntry{
				Email:     parts[0],
				Domain:    parts[1],
				Timestamp: parts[2],
				Valid:     valid,
			}
			entries = append(entries, entry)
		}
	}
	
	if err := scanner.Err(); err != nil {
		return nil, fmt.Errorf("error reading file: %w", err)
	}
	
	return entries, nil
}

// EmailExists checks if an email is already stored
func (s *FileEmailStore) EmailExists(email string) (bool, error) {
	s.mutex.Lock()
	defer s.mutex.Unlock()
	
	return s.emailExistsUnlocked(email)
}

// emailExistsUnlocked checks existence without locking (for internal use)
func (s *FileEmailStore) emailExistsUnlocked(email string) (bool, error) {
	entries, err := s.getAllEmailsUnlocked()
	if err != nil {
		return false, err
	}
	
	for _, entry := range entries {
		if entry.Email == email {
			return true, nil
		}
	}
	
	return false, nil
}