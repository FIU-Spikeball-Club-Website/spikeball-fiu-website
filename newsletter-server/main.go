package main

import (
	"fmt"
	"log"
	"net/http"

	"newsletter-server/controller"
	"newsletter-server/handler"
	"newsletter-server/store"
)

func main() {
	// Initialize store
	emailStore, err := store.NewFileEmailStore("data/emails.csv")
	if err != nil {
		log.Fatalf("Failed to initialize email store: %v", err)
	}
	
	// Initialize controllers
	domainController := controller.NewDomainController()
	emailController := controller.NewEmailController(emailStore, domainController)
	
	// Initialize handlers
	domainHandler := handler.NewDomainHandler(domainController)
	emailHandler := handler.NewEmailHandler(emailController)
	
	// Set up routes
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/" {
			http.NotFound(w, r)
			return
		}
		
		fmt.Fprintf(w, "Email Domain Validator API\n")
		fmt.Fprintf(w, "- GET /validate/{domain} - Check domain validity\n")
		fmt.Fprintf(w, "- GET /emails - List all emails\n")
		fmt.Fprintf(w, "- POST /emails - Store a new email\n")
	})
	
	// Domain routes
	http.HandleFunc("/validate/", domainHandler.HandleValidateGet)
	
	// Email routes
	http.HandleFunc("/emails", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			emailHandler.HandleListEmails(w, r)
		case http.MethodPost:
			emailHandler.HandleSaveEmail(w, r)
		default:
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	})
	
	// Start the server
	port := "8080"
	fmt.Printf("Server starting on port %s...\n", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}