import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
import { FornecedorService } from 'src/app/services/fornecedor/fornecedor.service';

@Component({
  selector: 'app-fornecedor-detalhes',
  templateUrl: './fornecedor-detalhes.component.html',
  styleUrls: ['./fornecedor-detalhes.component.scss']
})
export class FornecedorDetalhesComponent implements OnInit {

  forncedorDetalhado: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: FornecedorService,
    private router: Router ,private authService: AuthServiceService
  ) {
    const clienteLogado = authService.getAuthUser();
    const tipoUser = authService.getTipoUser();
    if (clienteLogado !== null && tipoUser !== undefined && tipoUser != 'CLIENTE') {
    } else{
      this.router.navigate(['cliente/login']);

    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      // Use um serviço para buscar os detalhes com base no ID
      this.service.getFuncionarioById(id).subscribe((data) => {
        this.forncedorDetalhado = data;
      });
    });
  }


  voltarListagem(): void {
    this.router.navigate(['funcionario/lista-fornecedor']);
  }

}
