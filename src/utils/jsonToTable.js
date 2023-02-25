function jsonToTable(width = 100, boder = "1", cellSpacing = "0") {
  //创建table
  const table = document.createElement("table");
  table.border = boder;
  table.cellSpacing = cellSpacing;
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  for (const i of tableData) {
    // 创建tr
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    // 循环创建td
    i.forEach((item) => {
      var td = document.createElement("td");
      item.col && (td.colSpan = item.col);
      item.row && (td.rowSpan = item.row);
      td.innerHTML = item.content ? item.content : "默认内容";
      td.width = width + "px";
      tr.appendChild(td);
    });
  }
  document.body.appendChild(table);
}
jsonToTable(100, "1", "0");

function rotate() {
  const table = document.querySelector("table");
  table.style.transform = "rotate(90deg)";
  table.style.transformOrigin = "left 100%";
}
