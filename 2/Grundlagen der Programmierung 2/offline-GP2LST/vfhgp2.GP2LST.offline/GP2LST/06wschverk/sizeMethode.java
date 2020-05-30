   /**
     * Gibt die Anzahl der Elemente in der Warteschlange zurueck.
     * 
     * @return Anzahl der Element in der Warteschlage
     */
    
    public int size() {
        int anzahl = 0;
        ListNodeGen temp = head;
        // Schleife ueber alle Elemente
        while (temp != null) {
            temp = temp.next;
            anzahl++; // Anzahl erhoehen
        }
        return anzahl; // Anzahl zurueckgeben
    }
