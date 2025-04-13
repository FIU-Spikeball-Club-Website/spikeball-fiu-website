package main

import (
	"fmt"
	"log"
	"net/http"

	"newsletter/controller"
	"newsletter/handler"
)

func main() {
	// Initialize controller
	domainController := controller.NewDomainController()
	
	// Initialize handler with controller
	domainHandler := handler.NewDomainHandler(domainController)
	
	// Set up routes
	http.HandleFunc("/", domainHandler.HandleRoot)
	http.HandleFunc("/validate", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodPost {
			domainHandler.HandleValidatePost(w, r)
		} else {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	})

	http.HandleFunc("/validate/", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodGet {
			domainHandler.HandleValidateGet(w, r)
		} else {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	})
	
	// Start the server
	port := "8080"
	fmt.Printf("Email Domain Validator server starting on port %s...\n", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
