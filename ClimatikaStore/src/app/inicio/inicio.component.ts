import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { AuthService } from '../service/auth.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  produto: Produto = new Produto()
  listaProduto: Produto[]

  constructor(
    private produtoService: ProdutoService,
    public auth: AuthService
  ){ }

  ngOnInit(){
  window.scroll(0,0)
  this.auth.findByCategoriaMae()
  this.auth.findByCategoriaFilha()

  }

  getAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[])=>{
      this.listaProduto = resp
    })
  }

  produtoInfo(){
    
  }
}
