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
    
    // Only save if domain is valid (has MX records)
    if !result.HasMX {
        return fmt.Errorf("domain '%s' is not valid for email (no MX records)", domain)
    }
    
    // Save to store (domain is valid)
    return c.emailStore.SaveEmail(email, domain, true)
}

// GetAllEmails retrieves all stored emails
func (c *EmailController) GetAllEmails() ([]store.EmailEntry, error) {
	return c.emailStore.GetAllEmails()
}