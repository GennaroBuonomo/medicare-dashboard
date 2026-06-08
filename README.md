# 🏥 MediCare Pro | Clinical Risk Management Dashboard

Un'applicazione a pagina singola (SPA) sviluppata in React, progettata per il monitoraggio avanzato dei reparti ospedalieri, la gestione del rischio clinico e l'assistenza ai pazienti.

L'interfaccia mira a fornire una visione chiara e immediata dei parametri critici, integrando concetti teorici del nursing (come i modelli di Roper e Orem) all'interno di una UI moderna, pulita e altamente reattiva.

## 🎯 Obiettivo del Progetto

Questo progetto nasce con l'obiettivo di costruire un'architettura Frontend solida e scalabile, mantenendo un controllo visivo totale ("pixel-perfect"). Per questo motivo, **non è stata utilizzata alcuna libreria o framework CSS esterno** (come Bootstrap o Tailwind). L'intero layout è stato ingegnerizzato da zero utilizzando esclusivamente CSS Grid e Flexbox.

## 🛠️ Stack Tecnologico

- **Frontend:** React.js
- **Build Tool:** Vite
- **Styling:** CSS3 (Puro) - Architettura basata su variabili CSS, Grid e Flexbox
- **Gestione Dati:** Mock JSON Database (strutturato per simulare risposte API RESTful)
- **Routing:** React Router (in implementazione)

## 🚀 Funzionalità Principali (Core Features)

- **Architettura Layout Infrangibile:** Struttura master in CSS Grid che previene lo scrolling globale, bloccando Sidebar e Header e consentendo lo scorrimento solo nell'area dati centrale.
- **Palette Premium Healthcare:** Utilizzo della psicologia dei colori per un'interfaccia clinica (Medical Blue per la fiducia, indicatori semantici per i livelli di rischio: Basso, Medio, Alto).
- **Monitoraggio Pazienti (Modello Roper):** Valutazione delle attività di vita quotidiana (ADL).
- **Gestione Deficit di Cura (Modello Orem):** Tracciamento visivo delle necessità di assistenza del paziente.
- **Ricerca Live:** Filtraggio istantaneo dei pazienti per ID o Reparto.

## 🧠 Le Sfide Tecniche

La sfida principale di questo progetto è stata la scomposizione di dati clinici complessi in componenti React altamente modulari e riutilizzabili. Gestire gli stati di rischio (es. colorazioni dinamiche in base alla gravità) e mantenere il codice CSS pulito, semantico e isolato senza l'ausilio di framework esterni ha richiesto una profonda comprensione del DOM e delle regole di posizionamento.
