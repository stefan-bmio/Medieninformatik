     /**
     * Gibt die Stapel-Elemente, beginnend mit dem Obersten, und zwischen "[]"
     * als String zurück. Die Elemente werden mit ',' getrennt.
     * Wenn der Stapel leer ist, wird einfach "[]" zurueckgegeben.
     * 
     * @return String Stapel-Inhalt
     */
   public String toString() {
        if (!empty()) {
        	StringBuilder returnVal = new StringBuilder("[");
            for (int i = top; i > 0; i--) {
                returnVal.append(stack[i].toString() + ", ");
            }
            returnVal.append(stack[0].toString() + "]");
            return returnVal.toString();
        } else {
            return "[]";
        }
    }

    /**
     * Alternative Implementierung von toString
     * Mit der Benutzung der Java Bibliothek.
     * 
     * @return
     */
    public String toStringSimple() {
        return java.util.Arrays.toString(stack);
    }