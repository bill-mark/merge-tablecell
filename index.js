 const merge_tablecel = function(tabObj_f, cellindex, beginRow) {  //合并单元格, id ,第几列, 开始行
		    let colIndex = cellindex;
		    let rowBeginIndex = beginRow;
            let tabObj = document.getElementById(tabObj_f)
		    if (tabObj != null) {
		        let i, j;
		        let intSpan;
		        let strTemp = '';
		        for (i = rowBeginIndex; i < (tabObj.rows.length -  rowBeginIndex); i++) {              
		            intSpan = 1;
		            strTemp = tabObj.rows[i].cells[colIndex].innerText;
		            for (j = i + 1; j < tabObj.rows.length; j++) {
		                if (strTemp.trim() == tabObj.rows[j].cells[colIndex].innerText.trim() ) {
		                    intSpan++;	
		                    tabObj.rows[i].cells[colIndex].rowSpan = intSpan;
		                    tabObj.rows[j].cells[colIndex].style.display = "none";
		                }
		                else { 
		                	tabObj.rows[i].cells[colIndex].style.display = "table-cell"                  
		                    tabObj.rows[j].cells[colIndex].style.display = "table-cell"
                            i = j - 1
		                    break;
		                }
		            }

		        }
		    }
}

export default {
	merge_tablecel:merge_tablecel
}