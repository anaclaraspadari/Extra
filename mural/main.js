var contador_nota=5;
function addNota(){
    let t=document.getElementById("texto_nota").value;
    let l=document.createElement("LI");
    let etiq=document.createElement("LABEL");
    etiq.innerHTML= t;
    etiq.setAttribute("id","nota_label_"+contador_nota);
    let entrada=document.createElement("INPUT");
    entrada.setAttribute("type", "checkbox");
    entrada.setAttribute("id", "nota_input_"+contador_nota);
    l.appendChild(etiq);
    l.appendChild(entrada);
    document.getElementById("list").appendChild(l);
    contador_nota++;
}
function delNota(){
    let lista_nota=document.getElementById("list").childNodes;
    apagados=new Array();
    for(i=0;i<lista_nota.length;i++){
        let nodo=lista_nota[i];
        if(nodo.childNodes.length>=1){
            if(nodo.lastChild.checked===true){
                apagados.push(nodo);
            }
        }
    }
    for(i=0;i<apagados.length;i++){
        document.getElementById("list").removeChild(apagados[i]);
    }
}