#  Desenvolvendo SPA com Angular

Aplicação Single page application (SPA) desenvolvida como um desafio proposto pela instrutora Camila Ferreira, no curso Desenvolvendo SPA com Angular, da Digital Innovation One.


Neste projeto criei um SPA de exibição de carros em 3 componentes. As paginas são alternadas pelas tabs localizada no component content. Assim, a página não é atualizada, mantendo o conceito de Single Page Aplication. Cada componente mostra varios cards de um grupo de veículos (sedans, pickups e suvs), cada card contem um botão de curtir que habilita um MatDialog para confirmação da Ação.

 Para fins de aprendizado, apliquei o property biding nas tabs, onde os textos das labels vem do componente.ts, e nos eventos de click das tabs e dos MatDialogs. Apliquei o roteamento padrao inicial no onInit do content.component.ts para a primeira aba a ser sempre mostrada ser a página dos sedans.




<h2> Componentes: </h2> 
Shared -header -content -footer

Components -sedans -pickups -suvs

<h3>Components do Angular Material Utilizados:</h3> 
MatToolbarModule,
MatIconModule, MatTabsModule, MatCardModule, MatDialogModule
