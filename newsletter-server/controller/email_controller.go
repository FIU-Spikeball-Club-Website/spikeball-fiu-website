package controller

import (
	"fmt"
	"strings"
	
	"newsletter-server/store"
)

// EmailController handles email-related business logic
type EmailController struct {
	emailStore   store.EmailStore
	domainController *DomainController
}

// NewEmailController creates a new email controller
func NewEmailController(emailStore store.EmailStore, domainController *DomainController) *EmailController {
	return &EmailController{
		emailStore:   emailStore,
		domainController: domainController,
	}
}

// SaveEmail validates and saves an email address
func (c *EmailController) SaveEmail(email string) error {
	// Validate email format
	email = strings.TrimSpace(email)
	if email == "" {
		return fmt.Errorf("email cannot be empty")
	}
	
	// Split email to get domain
	parts := strings.Split(email, "@")
	if len(parts) != 2 {
		return fmt.Errorf("invalid email format")
	}
	
	// Validate domain before saving
	domain := parts[1]
	result := c.domainController.ValidateDomain(domain)
	
	// Save to store
	return c.emailStore.SaveEmail(email, domain, result.HasMX)
}

// GetAllEmails retrieves all stored emails
func (c *EmailController) GetAllEmails() ([]store.EmailEntry, error) {
	return c.emailStore.GetAllEmails()
}