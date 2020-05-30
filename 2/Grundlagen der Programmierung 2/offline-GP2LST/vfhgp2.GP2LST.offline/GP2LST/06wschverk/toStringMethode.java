    /**
     * Liefert eine Darstellung der Warteschlange als Zeichenkette.
     * 
     * @return String Warteschlange als Zeichenkette
     */
    @Override
    public String toString() {
        String s = "[ ";
        ListNodeGen temp = head;
        // Schleife ueber alle Elemente
        while (temp != null) {
            s = s + temp.element.toString() + ", ";
            temp = temp.next;
        }
        if (!empty())
            s = s.substring(0, s.length() - 2); // drop the last "' "
        s = s + "]";
        return s;
    }
