package controller

import (
	"log"
	"net"
	"strings"
)

// DomainController handles domain validation logic
type DomainController struct {
	// You could add dependencies here like a cache or database
}

// NewDomainController creates a new controller instance
func NewDomainController() *DomainController {
	return &DomainController{}
}

// DomainResult represents domain validation results
type DomainResult struct {
	Domain      string
	HasMX       bool
	HasSPF      bool
	SPFRecord   string
	HasDMARC    bool
	DMARCRecord string
	IsValid     bool
}

// ValidateDomain performs domain validation checks
func (c *DomainController) ValidateDomain(domain string) DomainResult {
	result := DomainResult{Domain: domain}

	// Check MX Records
	mxRecords, err := net.LookupMX(domain)
	if err != nil {
		log.Printf("MX lookup error for %s: %v\n", domain, err)
	}
	if len(mxRecords) > 0 {
		result.HasMX = true
	}

	// Check SPF Records
	txtRecords, err := net.LookupTXT(domain)
	if err != nil {
		log.Printf("TXT lookup error for %s: %v\n", domain, err)
	}
	for _, record := range txtRecords {
		if strings.HasPrefix(record, "v=spf1") {
			result.HasSPF = true
			result.SPFRecord = record
			break
		}
	}

	// Check DMARC Records
	dmarcRecords, err := net.LookupTXT("_dmarc." + domain)
	if err != nil {
		log.Printf("DMARC lookup error for %s: %v\n", domain, err)
	}
	for _, record := range dmarcRecords {
		if strings.HasPrefix(record, "v=DMARC1") {
			result.HasDMARC = true
			result.DMARCRecord = record
			break
		}
	}

	// Determine if domain is valid for email
	result.IsValid = result.HasMX // At minimum needs MX records

	return result
}
