function removeElementWithHideConditions(node_to_be_removed_id, node_check_id, check_value) {
    var c = document.getElementById(node_to_be_removed_id);
    var p = document.getElementById(node_check_id);
    if (p != null && p.innerHTML == check_value) {
        c.parentNode.removeChild(c);
    }
}

function removeClassElementsWithHideConditions(node_to_be_removed_class, node_check_id, check_value) {
    var c = document.querySelectorAll("." + node_to_be_removed_class);
    var p = document.getElementById(node_check_id);
    if (p != null && c != null && p.innerHTML == check_value) {
        for(var i = 0; i < c.length; i++)
            c[i].parentNode.removeChild(c[i]);
    }
}



function removeClassElementsIfClassesDoesntExists(node_to_be_removed_class, class_check) {
    var c = document.querySelectorAll("." + node_to_be_removed_class);
    var p = document.querySelectorAll(class_check);
    if (p != null && c != null && p.length == 0) {
        for(var i = 0; i < c.length; i++)
            c[i].parentNode.removeChild(c[i]);
    }
}

function removeClassElementsIfClassesExists(node_to_be_removed_class, class_check) {
    var c = document.querySelectorAll("." + node_to_be_removed_class);
    var p = document.querySelectorAll(class_check);
    if (p != null && c != null && p.length > 0) {
        for(var i = 0; i < c.length; i++)
            c[i].parentNode.removeChild(c[i]);
    }
}



function removeClassElementsIfClassesHaveSingleElementAndIsEmpty(node_to_be_removed_class, class_check) {
    var c = document.querySelectorAll("." + node_to_be_removed_class);
    var p = document.querySelectorAll(class_check);
    if (p != null && c != null && p.length == 1 && p[0].innerHTML == "") {
        for(var i = 0; i < c.length; i++)
            c[i].parentNode.removeChild(c[i]);
    }
}


function removeAllParentElementsIfAllClassesHaveSingleElementAndIsEmpty(parent, class_check) {
    var p = document.querySelectorAll(class_check);
    var not_empty_found = false;
    var empty_tags = new Array();
    if (p != null) 
    {
        for(var i = 0; i < p.length; i++)
        {
            if(p[i].innerHTML == "")
            {
                empty_tags.push(p[i]);
            }
            else
                not_empty_found = true;
        }
        
        if(not_empty_found)
        {
            return;
        }

        while (el = empty_tags.pop())
        {
            
            var par = getParent(el, parent);
            if(par != null)
                par.parentNode.removeChild(par);
        }
    }
}


function removeParentElementIfElementsClassesHaveSingleElementAndIsEmpty(parent, element_class, class_check) {
    var p = document.querySelectorAll(element_class);
    if (p != null) 
    {
        for(var i = 0; i < p.length; i++)
        {
            var e = p[i].querySelectorAll(class_check);
            if(e != null && e.length == 1 && e[0].innerHTML == "")
            {
                var par = getParent(p[i], parent);
                if(par != null)
                    par.parentNode.removeChild(par);
            }
            
        }
    }
}



function removeParentElementIfClassesHaveSomeValue(parent, class_check, value_check) {
    var p = document.querySelectorAll(class_check);
    var not_empty_found = false;
    var empty_tags = new Array();
    if (p != null) 
    {
        for(var i = 0; i < p.length; i++)
        {
            if(p[i].innerHTML == value_check)
            {
                empty_tags.push(p[i]);
            }
            
        }

        while (el = empty_tags.pop())
        {
            
            var par = getParent(el, parent);
            if(par != null)
                par.parentNode.removeChild(par);
        }
    }
}




function getParent(myTd, parentName)
{
    var parent = myTd.parentNode;
    while(true) {
      if(parent == null) {
        return null;
      }
      if(parent.nodeName == parentName) {
        return parent;
      }
      parent = parent.parentNode;
    }

}


function hideCFPIVA() {
    var c = document.getElementById("CF");
    var p = document.getElementById("PIVA");
    if (p.innerHTML != "") {
        c.parentNode.removeChild(c);
    }
}

function hideBonus() {
    var c = document.getElementById("bonustesto");
    var p = document.getElementById("bonusammissione");
    if (p.innerHTML != "1") {
        c.parentNode.removeChild(c);
    }
}


function hideMessaggioLettura() {
    var c = document.getElementById("messaggioletturafutura");
    var p = document.getElementById("letturafutura");
	var d = document.getElementById("letturafuturadata");
    if ((p.innerHTML == "") || (d.innerHTML == "")) {
        c.parentNode.removeChild(c);
    }
}

function hideRettificheLetture() {
    removeClassElementsWithHideConditions("sezione-rettifiche-letture", "rettificalettura", "");
}


function hideMessaggiBase()
{
    var mps = document.getElementsByClassName("messaggi-personalizzati");
    
    if (mps.length > 0) 
    {
        var mbs = document.getElementsByClassName("messaggi-standard");
        
        for(var i = 0; i< mbs.length; i++)
        {
            while(mbs[i].firstChild)
            {
                mbs[i].removeChild(mbs[i].firstChild);
            }
            
        }

    
    }
}

function hideRecapitiPrescrizione()
{
	var email = document.querySelectorAll(".email-prescrizione-valore");
	var fax = document.querySelectorAll(".fax-prescrizione-valore");
	var posta = document.querySelectorAll(".posta-prescrizione-valore");
	var recapiti = document.querySelectorAll(".prescrizione-biennale-recapiti");
	
	if (email!=null && fax!=null && posta!=null)
	{
		if (email.length == 0 && fax.length == 0 && posta.length == 0)
		{
			recapiti[0].remove();
		}
	}
}


function writeTextIfClassesHaveSingleElementAndIsEmpty(node_to_be_changed_class, class_check, text_to_write) {
    var c = document.querySelectorAll("." + node_to_be_changed_class); 
	var p = document.querySelectorAll(class_check);
    if (p != null && c != null && p.length == 1 && p[0].innerHTML == "") {
        for(var i = 0; i < c.length; i++)
            c[i].innerHTML = text_to_write;
    }
} 



function getInitialMonthChar(m)
{
    switch (m) {
    case "01":
        return "Gen";
    case "02":
        return "Feb";
    case "03":
        return "Mar";
    case "04":
        return "Apr";
    case "05":
        return "Mag";
    case "06":
        return "Giu";
    case "07":
        return "Lug";
    case "08":
        return "Ago";
    case "09":
        return "Set";
    case "10":
        return "Ott";
    case "11":
        return "Nov";
    case "12":
        return "Dic";
    }
    return "E";
}


function fillLegendColor(id, color)
{
    var obj = document.getElementById(id);
    obj.style.background = color;
}





function createChart() {

    var global = 0;
    var chart_elements = document.getElementsByClassName('consumi_hiddenvalues');
    var lab = new Array();
    var ser = new Array();
    var max = 0;
    for (var i = 0; i < chart_elements.length; i++) {
        var mese = chart_elements[i].getElementsByClassName("consumi_mese")[0];
        var consumo = chart_elements[i].getElementsByClassName("consumi_consumo")[0];
        lab[i] = getInitialMonthChar(mese.innerHTML);
        ser[i] = consumo.innerHTML.replace(".", "");
        if (parseInt(ser[i]) > max)
            max = parseInt(ser[i]);
    }
    var data = {
        labels: lab,
        series: [ser]
    };

    var options = {
        high: max + Math.pow(10, max.toString().length - 2),
        distributedSeries: true,
        axisX: {
            showGrid: false,
        },
        axisY: {
            showGrid: false,
        }
    };
    var chart = new Chartist.Bar('.ct-chart', data, options);
    chart.on('draw', function (data) {
        if (['bar', 'line'].indexOf(data.type) !== -1 && ser[data.index]) {

            var y = data.type === 'bar' ? data.y2 : data.y;
            var k = 49 - (3 * ser[data.index].toString().length);
            var class_group = 'ct-label';
            if(data.index == lab.length - 1)
            {
                class_group = class_group + ' ct-label-custom';
                k -= (0.5 * ser[data.index].toString().length);
            }
            var elem = 
            data.group.elem('text', {
                x: ((data.chartRect.width() / ser.length / 2) + (data.chartRect.width() / ser.length * data.index) + k),
                y: y - 10
            }, class_group);
            elem.text(ser[data.index]);
        }
    });
}

function getMax(v1, v2, v3)
{
    var max = new Array();
    if(parseInt(v1) > parseInt(v2))
    {
        max[0] = parseInt(v1);
        max[1] = 0;
    }
    else
    {
        max[0] = parseInt(v2);
        max[1] = 1;
    }

    if (parseInt(v3) > max[0])
    {
        max[0] = parseInt(v3);
        max[1] = 2;
    }
    return max;

}

function createChartEE() {

    var chart_elements = document.getElementsByClassName('consumi_hiddenvalues');
    var lab = new Array();
    var serF1 = new Array();
    var serF2 = new Array();
    var serF3 = new Array();
    var serTOT = new Array();
    var serMAXIndex = new Array();
    var max = 0;

    var colors = ['#000000', '#808080', '#C0C0C0'];
    for(var j = 0; j < colors.length; j++)
    {
        fillLegendColor("legenda-F" + (j+1).toString(), colors[j]);
    }

    var padresult = 0;
    
    for (var pad = 0; pad < 13 - chart_elements.length; pad++)
    {

        var month = (parseInt(chart_elements[chart_elements.length - 1].getElementsByClassName("consumi_mese")[0].innerHTML) + pad) % 12
        month = month == 0 ? 12 : month;
        month = month < 10 ? "0" + month.toString() : month.toString();
        lab[pad] = getInitialMonthChar(month);
        serF1[pad] = 0;
        serF2[pad] = 0;
        serF3[pad] = 0;
        serTOT[pad] = 0;
        var current_max = getMax(serF1[pad], serF2[pad], serF3[pad]);
        serMAXIndex[pad] = current_max[1];
        if (current_max[0] > max)
        {
            max = current_max[0];
        }
        padresult++;
    }

    
    for (var i = 0; i < chart_elements.length; i++) {
        var mese = chart_elements[i].getElementsByClassName("consumi_mese")[0];
        var f1 = chart_elements[i].getElementsByClassName("consumi_f1")[0];
        var f2 = chart_elements[i].getElementsByClassName("consumi_f2")[0];
        var f3 = chart_elements[i].getElementsByClassName("consumi_f3")[0];
        var totale = chart_elements[i].getElementsByClassName("consumi_totale")[0];
        lab[i + padresult] = getInitialMonthChar(mese.innerHTML);
        serF1[i + padresult] = f1.innerHTML == "" ? 0 : f1.innerHTML;
        serF2[i + padresult] = f2.innerHTML == "" ? 0 : f2.innerHTML;
        serF3[i + padresult] = f3.innerHTML == "" ? 0 : f3.innerHTML;
        serTOT[i + padresult] = totale.innerHTML;
        var current_max = getMax(serF1[i + padresult], serF2[i + padresult], serF3[i + padresult]);
        serMAXIndex[i + padresult] = current_max[1];
        if (current_max[0] > max)
        {
            max = current_max[0];
        }
    }


    var data = {
        labels: lab,
        series: [serF1, serF2, serF3]
    };

    var options = {
        high: max + Math.pow(10, max.toString().length - 2),
        distributedSeries: true,
        axisX: {
            showGrid: false,
        },
        axisY: {
            showGrid: false,
        }
    };
    var chart = new Chartist.Bar('.ct-chart', data, options);
    chart.on('draw', function (data) {
        if (['bar', 'line'].indexOf(data.type) !== -1 && serF1[data.index]) {
            
            //for(var key in data)
            //{
                //if(data.seriesIndex == 0)
                    //alert(data.x1.toString() + " - " + data.x2.toString() );
            //}

            var class_group = 'ct-label';
            var y = data.type === 'bar' ? data.y2 : data.y;
            var k = (2 * data.series[data.index].toString().length);
            if(data.index == lab.length - 1)
            {
                class_group = class_group + ' ct-label-custom';
                k -= (0.20 * data.series[data.index].toString().length);
            }
            data.group.elem('text', {
                x: data.x1 - k,
                y: y - 10
            }, class_group).text(data.series[data.index]);

            data.element.attr({
                style: 'stroke: ' + colors[data.seriesIndex] + ';'
            });
        }
    });

}



function manageConsumoTempo(type)
{
    var el = document.getElementById("consumo-tempo");
    var chart_elements = document.getElementsByClassName('consumi_hiddenvalues');
    if(chart_elements.length < 12)
        el.innerHTML = "Consumo da inizio fornitura";
    else
        el.innerHTML = "Consumo annuo";

    if(type == "E")
        el.innerHTML = el.innerHTML + " (kWh)";

    el.innerHTML += ":";

}



function manageAllineamentoScaglione()
{
    
    var els = document.querySelectorAll(".allineamento-scaglione");
    for (var i = 0; i < els.length; i++)
    {
        if(els[i] != null && !isNaN(parseInt(els[i].innerHTML.substring(0,1))))
        {
            els[i].parentNode.style.textAlign = 'right';
        }
    }
}

function managePageBreakInsideSection(node_to_be_changed_class, class_check)
{
	//Se il numero di righe della sezione è inferiore o uguale a 40 page break inside = avoid
	var c = document.querySelectorAll("." + node_to_be_changed_class); 
	var p = document.getElementsByClassName(class_check);
	
	if (p != null && c != null  && p.length >0 && p.length<=40)
	{
		for (var i = 0; i < c.length; i++)
		{
			c[i].style.pageBreakInside  = "avoid";
		}
	}
	
}


function hideElements(type) 
{
    hideCFPIVA();
    hideBonus();
    manageConsumoTempo(type);
    if(type == "G")
    {
        hideMessaggioLettura();
        removeElementWithHideConditions("consumi-stimati-messaggio", "letturabollettatipo", 'R'); 
		writeTextIfClassesHaveSingleElementAndIsEmpty("ConsumoAnnuoStorico-testo", ".ConsumoAnnuoStorico-valore", "non disponibile");
		removeClassElementsIfClassesHaveSingleElementAndIsEmpty("ct-chart", ".consumi_consumo"); 
		
		removeElementWithHideConditions("lettura-stimata-messaggio", "letturabollettatipo", 'R');  //nascondere frase lettura stimata se lettura reale
		removeElementWithHideConditions("lettura-stimata-messaggio", "lettura-misura", '');  //nascondere frase lettura stimata se lettura misura è vuoto
		removeElementWithHideConditions("lettura-stimata-messaggio", "lettura-data", '');  //nascondere frase lettura stimata se lettura data è vuoto
		
    }
    else if(type == "E")
    {
		removeClassElementsIfClassesHaveSingleElementAndIsEmpty("tabella-energia-attiva", ".sezione-totale-energia-attiva");
        removeClassElementsIfClassesHaveSingleElementAndIsEmpty("tabella-energia-reattiva", ".sezione-totale-energia-reattiva");
        removeClassElementsIfClassesHaveSingleElementAndIsEmpty("tabella-picco", ".sezione-data-picco"); 
		writeTextIfClassesHaveSingleElementAndIsEmpty("ConsumoAnnuoTotale-testo", ".ConsumoAnnuoTotale-valore", "non disponibile");
		removeClassElementsIfClassesHaveSingleElementAndIsEmpty("ct-chart", ".consumi_totale");
		removeClassElementsIfClassesHaveSingleElementAndIsEmpty("legenda-grafico", ".consumi_totale"); 		
        
    }
    hideMessaggiBase();
    hideRettificheLetture();
    removeClassElementsWithHideConditions("quota-dettaglio-imposte", "quotadettaglioimposte", "");
    removeClassElementsWithHideConditions("sezione-conguaglio-consumi-stimati", "conguaglioconsumistimati", "");
    removeClassElementsWithHideConditions("sezione-conguaglio-tariffario", "conguagliotariffario", "");
    removeClassElementsWithHideConditions("sezione-dettaglio-altre-partite", "altrepartite", "");




    //removeClassElementsIfClassesHaveSingleElementAndIsEmpty("riga-dettaglio-ricalcoli", ".sezione-imponibile-dettaglio-ricalcoli");
    //removeAllParentElementsIfAllClassesHaveSingleElementAndIsEmpty("TBODY", ".sezione-imponibile-dettaglio-ricalcoli");
    removeParentElementIfElementsClassesHaveSingleElementAndIsEmpty("TBODY", ".riga-dettaglio-ricalcoli", ".sezione-imponibile-dettaglio-ricalcoli")
    removeAllParentElementsIfAllClassesHaveSingleElementAndIsEmpty("TR", ".sezione-imponibile-riga-dettaglio-acconti");

    removeParentElementIfClassesHaveSomeValue("TR", ".testo-aliquota-iva-riepilogo", "0");

    removeClassElementsIfClassesHaveSingleElementAndIsEmpty("righe-riepilogo-split-payment", ".sezione-riepilogo-split-payment");
    removeClassElementsIfClassesHaveSingleElementAndIsEmpty("prima-riga-dettaglio-imposte", ".sezione-imponibile-dettaglio-imposte");
    removeClassElementsIfClassesHaveSingleElementAndIsEmpty("tabella-interessiapplicati", ".sezione-totale-interessiapplicati");
    removeClassElementsIfClassesHaveSingleElementAndIsEmpty("riga-dettaglio-acconti", ".sezione-imponibile-riga-dettaglio-acconti");
    removeClassElementsIfClassesHaveSingleElementAndIsEmpty("righe-interessi-applicati", ".sezione-percentuale-interessi-applicati");
    removeClassElementsIfClassesHaveSingleElementAndIsEmpty("righe-bollette-non-pagate", ".sezione-importo-bollette-non-pagate");
    removeClassElementsIfClassesHaveSingleElementAndIsEmpty("tabella-bollette-non-pagate", ".morosita-testo");
    removeClassElementsIfClassesHaveSingleElementAndIsEmpty("messaggio-rateizzazione", ".controllo-messaggio-rateizzazione");


    removeClassElementsIfClassesDoesntExists("tabella-ricalcoli-sintesi", ".sezione-conguaglio-consumi-stimati, .sezione-rettifiche-letture, .sezione-conguaglio-tariffario");
    removeClassElementsIfClassesExists("messaggio-ricalcoli-sintesi", ".tabella-ricalcoli-sintesi");
    removeClassElementsIfClassesExists("messaggio-dettaglio-imposte", ".prima-riga-dettaglio-imposte, .quota-dettaglio-imposte");
    removeClassElementsIfClassesDoesntExists("tabella-dettaglio-altre-partite", ".sezione-dettaglio-altre-partite");

    removeClassElementsIfClassesDoesntExists("tabella-ricalcoli", ".sezione-imponibile-dettaglio-ricalcoli"); 
	
	removeParentElementIfClassesHaveSomeValue("SPAN", ".data-fine-evento","");//Eventi	
	removeParentElementIfClassesHaveSomeValue("P", ".evento-singolo","");//Eventi
	
	/*Gestione bolletta sole altre partite*/ 
	removeClassElementsIfClassesHaveSingleElementAndIsEmpty("tabella-quadro-consumi", ".sezione-tipo-lettura"); 
	removeClassElementsIfClassesHaveSingleElementAndIsEmpty("costo-medio-um", ".costo-medio-valore");
	removeClassElementsIfClassesHaveSingleElementAndIsEmpty("costo-medio2-um", ".costo-medio2-valore"); 
	writeTextIfClassesHaveSingleElementAndIsEmpty("costo-medio-valore", ".costo-medio-valore", "non disponibile");
	writeTextIfClassesHaveSingleElementAndIsEmpty("costo-medio2-valore", ".costo-medio2-valore", "non disponibile");
	
	
	removeClassElementsIfClassesExists("chart-not-exists", ".ct-chart"); 
	removeClassElementsIfClassesHaveSingleElementAndIsEmpty("tabella-dettaglio", ".riga-intestazione-voce-dettaglio"); 
	removeClassElementsIfClassesDoesntExists("tabella-contenitore-dettaglio", ".tabella-interessiapplicati, .tabella-ricalcoli, .tabella-dettaglio");
	

    manageAllineamentoScaglione();
	managePageBreakInsideSection("tabella-dettaglio", "singola-riga-dettaglio");
	managePageBreakInsideSection("tabella-ricalcoli","sezione-imponibile-dettaglio-ricalcoli");

	//Prescrizione biennale
	removeClassElementsIfClassesHaveSingleElementAndIsEmpty("prescrizione-biennale-frasi",".prescrizione-biennale-testo-val") //Elimina la sezione delle frasi se la frase di testo della prescrizione non esiste
	removeClassElementsIfClassesHaveSingleElementAndIsEmpty("posta-prescrizione",".posta-prescrizione-valore"); //Elimina dai recapiti la sezione dell'indirizzo postale se questo non è valorizzato
	removeClassElementsIfClassesHaveSingleElementAndIsEmpty("email-prescrizione",".email-prescrizione-valore"); //Elimina dai recapiti la sezione dell'indirizzo email se questo non è valorizzato
	removeClassElementsIfClassesHaveSingleElementAndIsEmpty("fax-prescrizione",".fax-prescrizione-valore"); //Elimina dai recapiti la sezione del numero di fax se questo non è valorizzato
	hideRecapitiPrescrizione(); //Elimina sezione recapiti se nessun recapito è valorizzato
	removeClassElementsWithHideConditions("prescrizione-biennale", "prescrizione-pagina", "");//Elimina la pagina della prescrizione biennale se i tag non sono popolati
	removeParentElementIfClassesHaveSomeValue("TABLE","prescrizione-biennale","prescrizione-pagina");	//Elimina pagina della prescrizione se i tag non sono presenti
	
	

}