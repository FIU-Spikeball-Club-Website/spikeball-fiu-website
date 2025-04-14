// handler/email_handler.go
package handler

import (
	"encoding/json"
	"net/http"
	"strings"

	"newsletter-server/controller"
)

// EmailHandler handles HTTP requests for email operations
type EmailHandler struct {
	controller *controller.EmailController
}

// NewEmailHandler creates a new email handler
func NewEmailHandler(controller *controller.EmailController) *EmailHandler {
	return &EmailHandler{
		controller: controller,
	}
}

// HandleSaveEmail processes requests to save a validated email
func (h *EmailHandler) HandleSaveEmail(w http.ResponseWriter, r *http.Request) {
	// Parse request body
	var request struct {
		Email string `json:"email"`
	}
	
	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		http.Error(w, "Invalid request format", http.StatusBadRequest)
		return
	}
	
	// Save email
	err = h.controller.SaveEmail(request.Email)
	if err != nil {
		// Return different status code for duplicate emails
		if strings.Contains(err.Error(), "already exists") {
			http.Error(w, err.Error(), http.StatusConflict)
		} else {
			http.Error(w, "Failed to save email: "+err.Error(), http.StatusInternalServerError)
		}
		return
	}
	
	// Prepare success response
	response := struct {
		Success bool   `json:"success"`
		Message string `json:"message"`
		Email   string `json:"email"`
	}{
		Success: true,
		Message: "Email successfully saved",
		Email:   request.Email,
	}
	
	// Return success response
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(response)
}

// HandleListEmails retrieves all stored emails
func (h *EmailHandler) HandleListEmails(w http.ResponseWriter, r *http.Request) {
	// Get emails from storage
	emails, err := h.controller.GetAllEmails()
	if err != nil {
		http.Error(w, "Error retrieving emails: "+err.Error(), http.StatusInternalServerError)
		return
	}
	
	// Prepare response
	response := struct {
		Count  int              `json:"count"`
		Emails interface{}      `json:"emails"`
	}{
		Count:  len(emails),
		Emails: emails,
	}
	
	// Return response
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}
