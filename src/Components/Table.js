import React from 'react'
import {
    GridComponent,
    Inject,
    ColumnsDirective,
    ColumnDirective,
    Search,
    Page,
    Selection,
    Edit,
    Toolbar,
    Sort,
    Filter,
    Resize,
    ContextMenu,
    ExcelExport,
    PdfExport,
  } from "@syncfusion/ej2-react-grids";
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Search"];
  export const contextMenuItems = [
    "AutoFit",
    "AutoFitAll",
    "SortAscending",
    "SortDescending",
    "Copy",
    "Edit",
    "Delete",
    "Save",
    "Cancel",
    "PdfExport",
    "ExcelExport",
    "CsvExport",
    "FirstPage",
    "PrevPage",
    "LastPage",
    "NextPage",
  ];
  const editing = { allowDeleting: true };
const Table = ({data}) => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">    <GridComponent
    id="gridcomp"
    dataSource={data}
    width="auto"
    allowPaging
    allowSorting
    allowExcelExport
    allowPdfExport
    pageSettings={{ pageCount: 5 }}
    contextMenuItems={contextMenuItems}
    selectionSettings={selectionsettings}
    editSettings={editing}
    toolbar={toolbarOptions}
    allowFiltering={true}
    filterSettings={{ ignoreAccent: true, type: "Excel" }}
  >
    <ColumnsDirective>
    {/*  isPrimaryKey={true} visible={false} */}
    <ColumnDirective field="end_year" headerText="End year" textAlign="center" /> 
 <ColumnDirective field="country" headerText="Country" textAlign="center"   />
 <ColumnDirective field="city" headerText="City" textAlign="center"   />
 <ColumnDirective field="sector" headerText="Sector" textAlign="center"   />
 <ColumnDirective field="region" headerText="Region" textAlign="center"   />
 <ColumnDirective field="topic" headerText="Topics" textAlign="center"   />
 <ColumnDirective field="pestle" headerText="PEST" textAlign="center"   />
 <ColumnDirective field="source" headerText="Source" textAlign="center"   />
    {/*<ColumnDirective field="lastName" headerText="Last Name" textAlign="center"  width="100"  />

<ColumnDirective field="email" headerText= "Email" textAlign= "Center" width="100" />
    <ColumnDirective field="mobile" headerText= "Mobile" textAlign= "Center"  width="100" />
   <ColumnDirective field="ActiveInactive" headerText= "Status" textAlign= "Center"  width="100" template={gridEmpStatus} />
 <ColumnDirective field="_id" headerText= "Action" textAlign= "Center" width="60" template={gridItemAction} allowFiltering={false} />  */}


        </ColumnsDirective>
    <Inject
      services={[
        Resize,
        Search,
        ContextMenu,
        Page,
        Selection,
        Toolbar,
        Edit,
        Sort,
        Filter,
        ExcelExport,
        PdfExport,
      ]}
    />
  </GridComponent></div>
  )
}

export default Table