export const questions = [
  {
    id: "1",
    number: 1,
    title: "1. Find the number",
    desc: `
      <style type="text/css">.ps-content-wrapper-v0 div { margin: 0 auto; overflow: auto; } .ps-content-wrapper-v0 div.preheader { display: none; } .ps-content-wrapper-v0 p { white-space: pre-wrap; padding-left: 4px; padding-right: 4px; padding-top: 0px; padding-bottom: 2px; } .ps-content-wrapper-v0 p.section-title { font-weight: bold; padding-bottom: 0px; } .ps-content-wrapper-v0 ol.plain-list, .ps-content-wrapper-v0 ul.plain-list { list-style-type: none; padding: 4px; } .ps-content-wrapper-v0 li { white-space: normal; margin-top: 4px; margin-bottom: 4px; } .ps-content-wrapper-v0 code { color: black; } .ps-content-wrapper-v0 pre { background-color: #f4faff; border: 0; border-radius: 2px; margin: 8px; padding: 10px; } .ps-content-wrapper-v0 pre.scrollable-full-json { overflow-x: scroll; white-space: pre; } .ps-content-wrapper-v0 pre.scrollable-json { height: 300px; overflow-y: scroll; display: inline-grid; white-space: pre-wrap; padding-left: 8px; padding-right: 8px; padding-top: 4px; padding-bottom: 4px; } .ps-content-wrapper-v0 div.equation-parent { width: 400px; text-align: center; border: 1px solid #000; padding: 8px; } .ps-content-wrapper-v0 div.equation-parent.equation { width: 100%; display: inline-block; } .ps-content-wrapper-v0 figure { background-color: transparent; display: table; margin-top: 8px; margin-bottom: 8px; text-align: center; margin-left: auto; margin-right: auto; } .ps-content-wrapper-v0 figcaption { text-align: center; display: table-caption; caption-side: bottom; margin-top: 4px; margin-bottom: 4px; } .ps-content-wrapper-v0 img { width: auto; max-width: 100%; height: auto; } .ps-content-wrapper-v0 details { background-color: transparent; padding-left: 4px; padding-right: 4px; padding-top: 0px; padding-bottom: 2px; } .ps-content-wrapper-v0 details details { padding-left: 8px; padding-right: 8px; } .ps-content-wrapper-v0 details summary { background-color: #39424e; color: white; font-weight: bold; margin-top: 4px; margin-bottom: 4px; padding: 8px; } .ps-content-wrapper-v0 details details summary code { color: black; font-weight: bold; padding-left: 2px; padding-right: 2px; padding-top: 4px; padding-right: 4px; margin-left: 4px; } .ps-content-wrapper-v0 details div.collapsable-details { margin: 0 auto; padding-left: 4px; padding-right: 4px; padding-top: 0px; padding-bottom: 2px; overflow: auto; } .ps-content-wrapper-v0 details div.collapsable-details pre { margin-left: 4px; margin-right: 4px; margin-top: 4px; margin-bottom: 4px; } .ps-content-wrapper-v0 table.normal { border: 1px solid black; border-collapse: collapse; border-color: darkgray; margin: 0 auto; margin-top: 8px; margin-bottom: 8px; padding: 8px; width: 96%; table-layout: fixed; } .ps-content-wrapper-v0 table.normal tbody { display: block; overflow-x: auto; overflow-y: hidden; } .ps-content-wrapper-v0 table.normal tbody tr:first-child th { font-weight: bold; white-space: normal; } .ps-content-wrapper-v0 table.normal tbody tr th, .ps-content-wrapper-v0 table.normal tbody tr td { font-weight: normal; white-space: nowrap; text-align: center; vertical-align: middle; border: 1px solid black; border-color: darkgray; padding: 8px; } .ps-content-wrapper-v0 table.database-table { border-collapse: collapse; border-color: darkgray; border: 1px solid black; width: auto; margin-left: 4px; margin-top: 8px; margin-bottom: 8px; padding: 8px; } .ps-content-wrapper-v0 table.database-table tbody { overflow-x: auto; overflow-y: hidden; border: none; } .ps-content-wrapper-v0 table.database-table tbody tr th, .ps-content-wrapper-v0 table.database-table tbody tr td { font-weight: normal; white-space: nowrap; text-align: center; vertical-align: middle; border: 1px solid black; border-color: darkgray; padding: 8px; } .ps-content-wrapper-v0 table.database-table tbody tr th { font-weight: bold; border: 1px solid black; } .ps-content-wrapper-v0 table.database-table tbody tr:nth-child(2) td { border: 1px solid black; } .ps-content-wrapper-v0 table.database-table tbody tr:nth-child(n+2) td:first-child { border-left-color: black; } .ps-content-wrapper-v0 table.database-table tbody tr:nth-child(n+2) td:last-child { border-right-color: black; } .ps-content-wrapper-v0 table.database-table tbody tr:last-child td { border-bottom-color: black; } .ps-content-wrapper-v0 table.database-table tbody tr td.description { text-align: left; white-space: pre-wrap; } .ps-content-wrapper-v0 table.normal tbody tr th.description { width: 60%; } .ps-content-wrapper-v0 table.function-params tbody tr:first-child td.headers { border-bottom-width: 2px; } .ps-content-wrapper-v0 table.function-params tbody tr:last-child td { border-top-width: 2px; border-top-color: darkgray; } .ps-content-wrapper-v0 table.function-params tbody tr td.headers { width: 25%; font-weight: bold; text-align: center; border: 1px solid black; border-right-width: 2px; border-color: darkgray; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell { width: 100%; height: 100%; padding: 0px; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table { width: 100%; height: 100%; padding: 0px; margin: 0px; border: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr td.code { white-space: normal; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr th { border-top: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr th:first-child { border-left: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr th:last-child { border-right: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr:last-child td { border-bottom: 0; border-top-width: 1px; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr td:first-child { border-left: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr td:last-child { border-right: 0; } .ps-content-wrapper-v0 table.sudoku { border-collapse: collapse; border-color: darkgray; margin: 0 auto; margin-top: 8px; margin-bottom: 8px; padding: 8px; } .ps-content-wrapper-v0 table.sudoku colgroup, tbody { border: 3px solid black; } .ps-content-wrapper-v0 table.sudoku td { border: 1px solid black; height: 25px; width: 25px; text-align: center; padding: 0; } .ps-content-wrapper-v0 .left { text-align: left; } .ps-content-wrapper-v0 .right { text-align: right; } .ps-content-wrapper-v0 .code { font-family: monospace; white-space: nowrap; } .ps-content-wrapper-v0 .json-object-array ol, .ps-content-wrapper-v0 .json-object-array ol ul { margin-top: 0px; padding-left: 14px; } .json-object-array li { float: left; margin-right: 30px; margin-left: 10px; } .json-object-array pre { padding: 4px; margin-left: 0px; } .dropdown-heading { display: inline; color: #fff !important } details pre { white-space: pre-wrap; word-break: break-word; }
  </style>
  <div class="ps-content-wrapper-v0">
  <p>Set the stage and introduce the problem. Try to stay away from introducing variable names as this is the &#39;story&#39;. e.g. Prefer &quot;There is a line of football fans of various heights.&quot; versus &quot;There is a line of <em>n</em> fans with <em>heights[heights[0], heights[1]...heights[n-1]]</em> each fan of <em>height[i]</em> where <em>0 &le; i &lt; n</em>. Variables mixed in disrupt the flow.</p>
  
  <p>&nbsp;</p>
  
  <p>Tell the goal.</p>
  
  <p>&nbsp;</p>
  
  <p>Here&#39;s a table if you want to work in HTML source. It shouldn&#39;t have any styling. Choose &lt;More&gt; to see the add table button.</p>
  
  <table border="1" cellpadding="1" cellspacing="1" style="width:500px;">
      <caption>descriptive caption goes here</caption>
      <tbody>
          <tr>
              <th>Header 1</th>
              <th>Header 2</th>
          </tr>
          <tr>
              <td>1,1</td>
              <td>1,2</td>
          </tr>
          <tr>
              <td>2,1</td>
              <td>2,2</td>
          </tr>
      </tbody>
  </table>
  
  <p>&nbsp;</p>
  
  <p aria-level="4" class="section-title" role="heading"><strong>Example</strong></p>
  
  <p>arr = [3, 2]</p>
  
  <p>&nbsp;</p>
  
  <p>The example should be significantly different from either sample test case below. It should demonstrate anything you find difficult to describe in text. Try to keep the text to a minimum. For example, if there is a multi-step process that is repeated several times, create a table using a table element or pre tags, then explain one row fully. If an image will be helpful, make it an svg. Candidates complain that jpgs are not crisp.</p>
  
  <p>&nbsp;</p>
  
  <p>Note that any images should be uploaded to Hackerrank servers using the icon at the top of this editor. A number of situations might prevent access to outside servers, most commonly access restrictions and firewalls.</p>
  
  <p>&nbsp;</p>
  
  <p aria-level="4" class="section-title" role="heading"><strong>Function Description </strong></p>
  
  <p>Complete the function <em>functionName</em> in the editor below.</p>
  
  <p>&nbsp;</p>
  
  <p aria-level="4" class="section-title" role="heading"><strong>Function Parameters:</strong></p>
  
  <p>&nbsp;&nbsp;&nbsp;&nbsp;<em>int arr[n]:</em>&nbsp;tell what array elements represent, they already know parameter type/size</p>
  
  <p>&nbsp;&nbsp;&nbsp;&nbsp;<em>int power[n]:</em>&nbsp;the power requirement of each server for example</p>
  
  <p>&nbsp;</p>
  
  <p aria-level="4" class="section-title" role="heading"><strong>Returns</strong></p>
  
  <p>&nbsp;&nbsp;&nbsp;&nbsp;<em>int[n]:</em>&nbsp;the minimum power required for all servers chosen (Again, they know the data type/size from what&#39;s before the colon.)</p>
  
  <p>&nbsp;</p>
  
  <p aria-level="4" class="section-title" role="heading"><strong>Constraints</strong></p>
  
  <ul>
      <li>constraints as unordered list, don&#39;t use subscripts arr<sub>i</sub>, use arr[i] instead</li>
      <li>subscripts are too small to see sometimes, e.g. a<sub>i</sub> versus a<sub>j</sub></li>
  </ul>
  
  <p>&nbsp;</p>
  
  <details><summary class="section-title">
  <h4 class="dropdown-heading">Input Format for Custom Testing</h4>
  </summary>
  
  <div class="collapsable-details">
  <p>Input from stdin will be processed as follows and passed to the function.</p>
  
  <p>&nbsp;</p>
  
  <p>The first line contains an integer <em>n</em>, the size of the array <em>numbers</em>.</p>
  
  <p>Each of the next <em>n</em> lines contains an integer <em>numbers[i]</em>. (no subscripts, they&#39;re too small to read)</p>
  
  <p>With the exception of the temporary values, e.g. array size which isn&#39;t passed to the candidates, describe only the input. The use of the inputs is described in the Function Description and does not need to be repeated here.</p>
  
  <p>&nbsp;</p>
  </div>
  </details>
  
  <details open="open"><summary class="section-title">
  <h4 class="dropdown-heading">Sample Case 0</h4>
  </summary>
  
  <div class="collapsable-details">
  <p aria-level="5" class="section-title" role="heading"><strong>Sample Input 0</strong></p>
  
  <pre>
  TODO: ADD_SAMPLE_INPUT</pre>
  
  <p aria-level="5" class="section-title" role="heading"><strong>Sample Output 0</strong></p>
  
  <pre>
  TODO: output exactly as it is expected</pre>
  
  <p aria-level="5" class="section-title" role="heading"><strong>Explanation</strong></p>
  
  <p><strong>As a last step, always test the challenge with a complete solution.</strong>If you have created custom code stubs, test for proper I/O for all languages at a minimum. It is easy to let the code stub read and pass the parameters, then return a dummy value. This saves a lot of effort in the long run.</p>
  
  <p>&nbsp;</p>
  
  <p>Sample 0 should be expanded when the question opens. Open Sample 0, close the other sections and press &lt;source&gt; at the top of this window to automatically add open=&quot;&quot; to the details tag for this section. While in the source view, edit the style to open=&quot;open&quot;. You can manually insert the tag in the source window too.</p>
  
  <p>Explanatory text and diagrams (svg). Like the Example section, keep the text to a minimum. Note that the Sample Input and Output sections show input and expected results clearly. They generally do not need to be repeated here.</p>
  </div>
  </details>
  
  <details><summary class="section-title">
  <h4 class="dropdown-heading">Sample Case 1</h4>
  </summary>
  
  <div class="collapsable-details">
  <p aria-level="5" class="section-title" role="heading"><strong>Sample Input 1</strong></p>
  
  <pre>
  TODO: ADD_SAMPLE_INPUT</pre>
  
  <p aria-level="5" class="section-title" role="heading"><strong>Sample Output 1</strong></p>
  
  <pre>
  output exactly as it is expected</pre>
  
  <p aria-level="5" class="section-title" role="heading"><strong>Explanation</strong></p>
  
  <p>Explanatory text and diagrams</p>
  </div>
  </details>
  </div>
      `,
  },
  {
    id: "2",
    number: 2,
    title: "2. Odd numbers",
    desc: `
      <style type="text/css">.ps-content-wrapper-v0 div { margin: 0 auto; overflow: auto; } .ps-content-wrapper-v0 div.preheader { display: none; } .ps-content-wrapper-v0 p { white-space: pre-wrap; padding-left: 4px; padding-right: 4px; padding-top: 0px; padding-bottom: 2px; } .ps-content-wrapper-v0 p.section-title { font-weight: bold; padding-bottom: 0px; } .ps-content-wrapper-v0 ol.plain-list, .ps-content-wrapper-v0 ul.plain-list { list-style-type: none; padding: 4px; } .ps-content-wrapper-v0 li { white-space: normal; margin-top: 4px; margin-bottom: 4px; } .ps-content-wrapper-v0 code { color: black; } .ps-content-wrapper-v0 pre { background-color: #f4faff; border: 0; border-radius: 2px; margin: 8px; padding: 10px; } .ps-content-wrapper-v0 pre.scrollable-full-json { overflow-x: scroll; white-space: pre; } .ps-content-wrapper-v0 pre.scrollable-json { height: 300px; overflow-y: scroll; display: inline-grid; white-space: pre-wrap; padding-left: 8px; padding-right: 8px; padding-top: 4px; padding-bottom: 4px; } .ps-content-wrapper-v0 div.equation-parent { width: 400px; text-align: center; border: 1px solid #000; padding: 8px; } .ps-content-wrapper-v0 div.equation-parent.equation { width: 100%; display: inline-block; } .ps-content-wrapper-v0 figure { background-color: transparent; display: table; margin-top: 8px; margin-bottom: 8px; text-align: center; margin-left: auto; margin-right: auto; } .ps-content-wrapper-v0 figcaption { text-align: center; display: table-caption; caption-side: bottom; margin-top: 4px; margin-bottom: 4px; } .ps-content-wrapper-v0 img { width: auto; max-width: 100%; height: auto; } .ps-content-wrapper-v0 details { background-color: transparent; padding-left: 4px; padding-right: 4px; padding-top: 0px; padding-bottom: 2px; } .ps-content-wrapper-v0 details details { padding-left: 8px; padding-right: 8px; } .ps-content-wrapper-v0 details summary { background-color: #39424e; color: white; font-weight: bold; margin-top: 4px; margin-bottom: 4px; padding: 8px; } .ps-content-wrapper-v0 details details summary code { color: black; font-weight: bold; padding-left: 2px; padding-right: 2px; padding-top: 4px; padding-right: 4px; margin-left: 4px; } .ps-content-wrapper-v0 details div.collapsable-details { margin: 0 auto; padding-left: 4px; padding-right: 4px; padding-top: 0px; padding-bottom: 2px; overflow: auto; } .ps-content-wrapper-v0 details div.collapsable-details pre { margin-left: 4px; margin-right: 4px; margin-top: 4px; margin-bottom: 4px; } .ps-content-wrapper-v0 table.normal { border: 1px solid black; border-collapse: collapse; border-color: darkgray; margin: 0 auto; margin-top: 8px; margin-bottom: 8px; padding: 8px; width: 96%; table-layout: fixed; } .ps-content-wrapper-v0 table.normal tbody { display: block; overflow-x: auto; overflow-y: hidden; } .ps-content-wrapper-v0 table.normal tbody tr:first-child th { font-weight: bold; white-space: normal; } .ps-content-wrapper-v0 table.normal tbody tr th, .ps-content-wrapper-v0 table.normal tbody tr td { font-weight: normal; white-space: nowrap; text-align: center; vertical-align: middle; border: 1px solid black; border-color: darkgray; padding: 8px; } .ps-content-wrapper-v0 table.database-table { border-collapse: collapse; border-color: darkgray; border: 1px solid black; width: auto; margin-left: 4px; margin-top: 8px; margin-bottom: 8px; padding: 8px; } .ps-content-wrapper-v0 table.database-table tbody { overflow-x: auto; overflow-y: hidden; border: none; } .ps-content-wrapper-v0 table.database-table tbody tr th, .ps-content-wrapper-v0 table.database-table tbody tr td { font-weight: normal; white-space: nowrap; text-align: center; vertical-align: middle; border: 1px solid black; border-color: darkgray; padding: 8px; } .ps-content-wrapper-v0 table.database-table tbody tr th { font-weight: bold; border: 1px solid black; } .ps-content-wrapper-v0 table.database-table tbody tr:nth-child(2) td { border: 1px solid black; } .ps-content-wrapper-v0 table.database-table tbody tr:nth-child(n+2) td:first-child { border-left-color: black; } .ps-content-wrapper-v0 table.database-table tbody tr:nth-child(n+2) td:last-child { border-right-color: black; } .ps-content-wrapper-v0 table.database-table tbody tr:last-child td { border-bottom-color: black; } .ps-content-wrapper-v0 table.database-table tbody tr td.description { text-align: left; white-space: pre-wrap; } .ps-content-wrapper-v0 table.normal tbody tr th.description { width: 60%; } .ps-content-wrapper-v0 table.function-params tbody tr:first-child td.headers { border-bottom-width: 2px; } .ps-content-wrapper-v0 table.function-params tbody tr:last-child td { border-top-width: 2px; border-top-color: darkgray; } .ps-content-wrapper-v0 table.function-params tbody tr td.headers { width: 25%; font-weight: bold; text-align: center; border: 1px solid black; border-right-width: 2px; border-color: darkgray; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell { width: 100%; height: 100%; padding: 0px; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table { width: 100%; height: 100%; padding: 0px; margin: 0px; border: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr td.code { white-space: normal; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr th { border-top: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr th:first-child { border-left: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr th:last-child { border-right: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr:last-child td { border-bottom: 0; border-top-width: 1px; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr td:first-child { border-left: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr td:last-child { border-right: 0; } .ps-content-wrapper-v0 table.sudoku { border-collapse: collapse; border-color: darkgray; margin: 0 auto; margin-top: 8px; margin-bottom: 8px; padding: 8px; } .ps-content-wrapper-v0 table.sudoku colgroup, tbody { border: 3px solid black; } .ps-content-wrapper-v0 table.sudoku td { border: 1px solid black; height: 25px; width: 25px; text-align: center; padding: 0; } .ps-content-wrapper-v0 .left { text-align: left; } .ps-content-wrapper-v0 .right { text-align: right; } .ps-content-wrapper-v0 .code { font-family: monospace; white-space: nowrap; } .ps-content-wrapper-v0 .json-object-array ol, .ps-content-wrapper-v0 .json-object-array ol ul { margin-top: 0px; padding-left: 14px; } .json-object-array li { float: left; margin-right: 30px; margin-left: 10px; } .json-object-array pre { padding: 4px; margin-left: 0px; } html.theme-dark .ps-content-wrapper-v0 code { color: #b5c0d0 } .dropdown-heading { display: inline; color: #fff !important } details pre { white-space: pre-wrap; word-break: break-word; }
  </style>
  <div class="ps-content-wrapper-v0">
  <p>Brief problem statement here</p>
  
  <p>The result should be in the following format: [list of fields]. Be sure to include any formatting (e.g. 2 places after the decimal) and sorting requirements here. Go to the &quot;Output&quot; tab and scroll to the bottom and click &quot;Show Advanced Settings&quot;. Set the sorting and other choices as needed.</p>
  
  <ul>
      <li>If there are lots of special requirements, they can be in a list here. Otherwise, delete this section</li>
  </ul>
  
  <p>&nbsp;</p>
  
  <details><summary class="section-title">
  <h4 class="dropdown-heading">Schema</h4>
  </summary>
  
  <div class="collapsable-details">
  <table class="database-table">
      <caption>Put the table name here in the caption.</caption>
      <tbody>
          <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Constraint</th>
              <th>Description</th>
          </tr>
          <tr>
              <td>data</td>
              <td>data(4)</td>
              <td>constraint</td>
              <td class="description">data</td>
          </tr>
      </tbody>
  </table>
  
  <table class="database-table">
      <caption>Put the table name here in the caption.</caption>
      <tbody>
          <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Constraint</th>
              <th>Description</th>
          </tr>
          <tr>
              <td>data</td>
              <td>data(4)</td>
              <td>constraint</td>
              <td class="description">data</td>
          </tr>
      </tbody>
  </table>
  </div>
  </details>
  
  <details><summary class="section-title">
  <h4 class="dropdown-heading">Sample Data Tables</h4>
  </summary>
  
  <div class="collapsable-details">
  <table class="database-table">
      <caption>Put the table name here in the caption.</caption>
      <tbody>
          <tr>
              <th>field name 1</th>
              <th>field name 2</th>
              <th>field name 3</th>
          </tr>
          <tr>
              <td>field 1 data</td>
              <td>field 2 data</td>
              <td>field 3 data</td>
          </tr>
      </tbody>
  </table>
  
  <p>&nbsp;</p>
  
  <table class="database-table">
      <caption>Put the table name here in the caption.</caption>
      <tbody>
          <tr>
              <th>field name 1</th>
              <th>field name 2</th>
              <th>field name 3</th>
          </tr>
          <tr>
              <td>field 1 data</td>
              <td>field 2 data</td>
              <td>field 3 data</td>
          </tr>
      </tbody>
  </table>
  
  <p aria-level="5" class="section-title" role="heading"><strong>Sample Output</strong></p>
  
  <pre>
  output in pre tags</pre>
  
  <p aria-level="5" class="section-title" role="heading">Explanation</p>
  
  <p>Add an explanation if it will help. Otherwise, delete this section.</p>
  
  <p><strong>Be sure to test the question with a complete solution as a last step.</strong></p>
  </div>
  </details>
  </div>
      `,
  },
];