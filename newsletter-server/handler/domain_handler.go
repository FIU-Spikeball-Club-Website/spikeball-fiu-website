package handler

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strings"

	"newsletter-server/controller"
)

// DomainHandler handles HTTP requests for domain validation
type DomainHandler struct {
	controller *controller.DomainController
}

// NewDomainHandler creates a new handler with the given controller
func NewDomainHandler(controller *controller.DomainController) *DomainHandler {
	return &DomainHandler{
		controller: controller,
	}
}

// HandleRoot renders the homepage
func (h *DomainHandler) HandleRoot(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/validate" {
		http.NotFound(w, r)
		return
	}
	
	fmt.Fprintf(w, "Email Domain Validator\n")
	fmt.Fprintf(w, "Use /validate/{domain} to check if a domain is properly configured for email\n")
	fmt.Fprintf(w, "Or POST to /validate with JSON {\"domain\": \"example.com\"}\n")
}

// HandleValidateGet processes GET requests to validate a domain
func (h *DomainHandler) HandleValidateGet(w http.ResponseWriter, r *http.Request) {
	// Extract domain from URL path
	path := strings.TrimPrefix(r.URL.Path, "/validate/")
	domain := strings.TrimSpace(path)
	
	if domain == "" {
		http.Error(w, "Please provide a domain to validate (e.g., /validate/example.com)", 
			http.StatusBadRequest)
		return
	}
	
	h.validateAndRespond(domain, w)
}

// validateAndRespond performs validation and writes the response
func (h *DomainHandler) validateAndRespond(domain string, w http.ResponseWriter) {
	// Call controller to validate domain
	result := h.controller.ValidateDomain(domain)
	
	// Set content type for JSON response
	w.Header().Set("Content-Type", "application/json")
	
	// Create response with validation results
	response := struct {
		Domain      string `json:"domain"`
		HasMX       bool   `json:"hasMX"`
		HasSPF      bool   `json:"hasSPF"`
		SPFRecord   string `json:"spfRecord,omitempty"`
		HasDMARC    bool   `json:"hasDMARC"`
		DMARCRecord string `json:"dmarcRecord,omitempty"`
		Status      string `json:"status"`
	}{
		Domain:      result.Domain,
		HasMX:       result.HasMX,
		HasSPF:      result.HasSPF,
		SPFRecord:   result.SPFRecord,
		HasDMARC:    result.HasDMARC,
		DMARCRecord: result.DMARCRecord,
	}
	
	// Determine status message
	if result.HasMX {
		if result.HasSPF && result.HasDMARC {
			response.Status = "valid"
		} else {
			response.Status = "partial"
		}
	} else {
		response.Status = "invalid"
	}
	
	// Encode and send response
	encoder := json.NewEncoder(w)
	encoder.SetIndent("", "  ")
	if err := encoder.Encode(response); err != nil {
		http.Error(w, "Error encoding response: "+err.Error(), 
			http.StatusInternalServerError)
	}
}