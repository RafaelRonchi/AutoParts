package br.com.autoparts.api.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "vendas")
@Getter
@Setter
public class Vendas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer vendas_id;
    
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "pecas_id")
    private Integer pecas_id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "pecas_fornecedores_id")
    private Integer pecas_fornecedores_id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "funcionario_id")
    private Integer funcionario_id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "clientes_id")
    private Integer clientes_id;
    
}
