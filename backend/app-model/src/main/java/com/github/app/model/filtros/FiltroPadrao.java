package com.github.app.model.filtros;

public class FiltroPadrao implements IFiltroDeQuery {

    private final int firstResult;
    private final int maxResults;
    
    private FiltroPadrao(FiltroPadraoBuilder builder) {
        this.firstResult = builder.firstResult;
        this.maxResults = builder.maxResults;
    }

    public static class FiltroPadraoBuilder {
        private final int firstResult;
        private final int maxResults;
        
        public FiltroPadraoBuilder(final int firstResult, final int maxResults) {
            this.firstResult = firstResult;
            this.maxResults = maxResults;
        }
        
        public FiltroPadrao build() {
            return new FiltroPadrao(this);
        }
    }
    
    @Override
    public int getFirstResult() {
        return firstResult;
    }

    @Override
    public int getMaxResults() {
        return maxResults;
    }

}
