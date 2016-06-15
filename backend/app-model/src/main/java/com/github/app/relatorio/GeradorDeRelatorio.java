package com.github.app.relatorio;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

public class GeradorDeRelatorio {

    private final String nomeRelatorio;
    private Map<String, Object> parametros = new HashMap<>();
    private Collection<?> beanCollection;
    
    public GeradorDeRelatorio(String nomeRelatorio) {
        this.nomeRelatorio = nomeRelatorio;
    }
    
    public byte[] gerar() {
        byte[] relatorioEmPdf = {};
        String diretorioJasper = this.getClass().getClassLoader().getResource("").getPath() + "relatorios/" + nomeRelatorio + ".jrxml";
        try {
            JasperReport report = JasperCompileManager.compileReport(diretorioJasper);
            JRBeanCollectionDataSource collectionDataSource = new JRBeanCollectionDataSource(beanCollection);
            JasperPrint print = JasperFillManager.fillReport(report, parametros, collectionDataSource);
            relatorioEmPdf = JasperExportManager.exportReportToPdf(print);
        } catch (JRException e) {
            e.printStackTrace();
        }
        return relatorioEmPdf;
    }
    
    public void adicinarParametro(String chave, Object valor) {
        parametros.put(chave, valor);
    }
    
    public void setBeanCollection(Collection<?> collection) {
        this.beanCollection = collection;
    }
    
}
