// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
}


//On click of purchasing and receiving buttons on dashboard
const purchasingReceivingButton = document.querySelector('#purchasing');
purchasingReceivingButton.addEventListener('click', function (e) {
    e.preventDefault();
    renderPurchasingTable(purchaseTemplate, '#purchaseTable');
    renderReceivingTable(receivingTemplate, '#receivingTable');
})

let purchaseTemplate = `
<div class="purchasingContainer">
        <h2 class="text-center">Purchasing</h2>
        <div class="row d-flex justify-content-around">
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Purchase Order</h5>
                        <p class="card-text">Email, Print, or View PDF versions of your Purchase Order</p>
                        <a id="createPO" href="#" class="btn btn-primary" onclick="openForm()">Create PO</a>
                        <div class="form-popup" id="myForm">
                            <form action="/action_page.php" class="form-container">
                                <h1>Create PO</h1>

                                <label for="poDate"><b>PO Date</b></label>
                                <input type="date" placeholder="Enter Date" name="poDate" required>

                                <label for="vendorName"><b>Vendor Name</b></label>
                                <input type="text" placeholder="Enter Vendor Name" name="vendorName" required>

                                <label for="poNumber"><b>PO Number</b></label>
                                <input type="text" placeholder="PO Number will auto generate" name="poNumber" disabled>

                                <label for="itemDescription"><b>Item Description</b></label>
                                <table id="poTable" class="poTable" width="100%" style="margin-top:20px">
                                    <thead>
                                        <th>QTY</th>
                                        <th>UNIT</th>
                                        <th>DESCRIPTION</th>
                                        <th>COST</th>
                                        <th class="docEdit trAdd" onclick="addRow()">+</th>
                                    </thead>
                                    <tbody>
                                        <tr id="poTable">
                                            <td contenteditable="true">1</td>
                                            <td class="unit" contenteditable="true"></td>
                                            <td contenteditable="true" class="description"></td>
                                            <td class="amount" contenteditable="true">0</td>
                                            <td class="docEdit tdDelete" onclick="deleteRow(this)">X</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button type="submit" class="previewBtn">Preview</button>
                                <button type="submit" class="SubmitBtn">Create</button>
                                <button type="button" class="btn cancelBtn" onclick="closeForm()">Close</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Vendor Options</h5>
                        <p class="card-text">Create, Update or Delete vendor details (address, contact info, etc.)</p>
                        <a href="#" class="btn btn-primary" onclick="openVendorForm()">Vendors</a>
                        <div class="form-popup" id="vendorForm">
                        <form class="form-container">
                            <h1>Vendor Options</h1>

                            <button id="createVendorBtn" type="submit" class="createVendorBtn" onclick="createVendorForm(createVendorTemplate, '#createVendorContainer')">Create Vendor</button>
                            <div id="createVendorContainer">
                            </div>
                            
                            
                            <button type="submit" class="updateVendorBtn">Update Vendor</button>
                            <button type="submit" class="deleteVendorBtn">Delete Vendor</button>
                            <div id="createVendorDropdown" class="createVendorDropdown">

                            </div>
                            
                            <button type="button" class="btn cancelBtn" onclick="closeVendorForm()">Close</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
let renderPurchasingTable = function (template, selector) {
    let node = document.querySelector(selector);
    if (!node) return;
    node.innerHTML = template;
};

let receivingTemplate = `<div class="receivingContainer">
<h2 class="text-center">Receiving</h2>
<div class="row d-flex justify-content-around">
<div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Receive a PO</h5>
        <p class="card-text">Update the order status for any submitted POs (must be submitted)</p>
        <a href="#" class="btn btn-primary">Update PO</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">PO History</h5>
        <p class="card-text">Review all submitted POs and their current statuses within the database</p>
        <a href="#" class="btn btn-primary">Review POs</a>
      </div>
    </div>
  </div>
</div>
</div>`;
let renderReceivingTable = function (template, selector) {
    let node = document.querySelector(selector);
    if (!node) return;
    node.innerHTML = template;
};


//On click of Overview button on dashboard
const overviewButton = document.querySelector('#overviewBtn');
overviewButton.addEventListener('click', function (e) {
    e.preventDefault();
    renderOverview(overviewTemplate, '#overview');
})

let overviewTemplate = `
<div id="purchaseTable" class="w3-half w3-table w3-striped w3-white homeTables purchaseTable">
                    <h5 class="tableTitle">Revenue Breakdown</h5>
                    <table>
                        <tr>
                            <th></th>
                            <th>Yesterday</th>
                            <th>MTD</th>
                            <th>Forecast</th>
                        </tr>
                        <tr>
                            <th>Food</th>
                            <td>$ 15,000</td>
                            <td>$ 30,000</td>
                            <td>$ 42,000</td>
                        </tr>
                        <tr>
                            <th>Beverage</th>
                            <td>$ 15,000</td>
                            <td>$ 30,000</td>
                            <td>$ 42,000</td>
                        </tr>
                        <tr>
                            <th>Banquet</th>
                            <td>$ 15,000</td>
                            <td>$ 30,000</td>
                            <td>$ 42,000</td>
                        </tr>
                        <tr>
                            <th>Service Charges</th>
                            <td>$ 15,000</td>
                            <td>$ 30,000</td>
                            <td>$ 42,000</td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td>$ 60,000</td>
                            <td>$ 120,000</td>
                            <td>$ 168,000</td>
                        </tr>
                    </table>
                </div>
                <div id="receivingTable" class="w3-half w3-table w3-striped w3-white homeTables receivingTable">
                    <h5 class="tableTitle">Productivity Breakdown</h5>
                    <table>
                        <tr>
                            <th></th>
                            <th>Yesterday</th>
                            <th>MTD</th>
                            <th>Forecast</th>
                        </tr>
                        <tr>
                            <th>Wages</th>
                            <td>$ 15,000</td>
                            <td>$ 30,000</td>
                            <td>$ 42,000</td>
                        </tr>
                        <tr>
                            <th>Benefits</th>
                            <td>$ 15,000</td>
                            <td>$ 30,000</td>
                            <td>$ 42,000</td>
                        </tr>
                        <tr>
                            <th>Overtime</th>
                            <td>$ 15,000</td>
                            <td>$ 30,000</td>
                            <td>$ 42,000</td>
                        </tr>
                        <tr>
                            <th>Service Charges</th>
                            <td>$ 15,000</td>
                            <td>$ 30,000</td>
                            <td>$ 42,000</td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td>$ 60,000</td>
                            <td>$ 120,000</td>
                            <td>$ 168,000</td>
                        </tr>
                    </table>
                </div>
`;
let renderOverview = function (template, selector) {
    let node = document.querySelector(selector);
    if (!node) return;
    node.innerHTML = template;
};

// On click of Create PO button on Purchasing tab
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
document.getElementById("myForm").style.display = "none";
}

// On click of '+' button
function addRow() {
    let table = document.querySelector("#poTable");
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    cell1.setAttribute('contentEditable', 'true');
    let cell2 = row.insertCell(1);
    cell2.setAttribute('contentEditable', 'true');
    cell2.className = 'unit';
    let cell3 = row.insertCell(2);
    cell3.setAttribute('contentEditable', 'true');
    cell3.className = 'description';
    let cell4 = row.insertCell(3);
    cell4.setAttribute('contentEditable', 'true');
    cell4.className = 'amount';
    let cell5 = row.insertCell(4);
    cell5.setAttribute('contentEditable', 'true');
    cell5.className = 'docEdit';
    cell5.className = 'tdDelete';
    cell5.setAttribute('onclick','deleteRow(this)');
    cell1.innerHTML = `1`;
    cell2.innerHTML = ``
    cell3.innerHTML = ``;
    cell4.innerHTML = `0`;
    cell5.innerHTML = `X`;
  };
// On click of 'X' button
function deleteRow(r) {
    let i = r.parentNode.rowIndex;
    document.querySelector("#poTable").deleteRow(i);
  }

// On click of 'Vendors' button on Purchasing tab
function openVendorForm() {
    document.querySelector("#vendorForm").style.display = "block";
  }

function closeVendorForm() {
document.querySelector("#vendorForm").style.display = "none";
}

//On click of create vendor button
let createVendorForm = function(template, selector){
    document.querySelector("#createVendorContainer").style.display = "block";
    let node = document.querySelector(selector);
    if(!node) return;
    node.innerHTML = template;
}

let createVendorTemplate = `
<form>
  <div class="form-row">
  <div class="form-group col-md-12">
      <label for="vendorName">Vendor Name</label>
      <input type="text" class="form-control" id="vendorName" placeholder="ABC Company">
    </div>
    <div class="form-group col-md-6">
      <label for="phoneNum">Contact Number</label>
      <input type="tel" class="form-control" id="phoneNum" placeholder="000-000-0000">
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select name="state" id="inputState">
  <option value="" selected="selected" disabled>State</option>
  <option value="AL">AL</option>
  <option value="AK">AK</option>
  <option value="AZ">AZ</option>
  <option value="AR">AR</option>
  <option value="CA">CA</option>
  <option value="CO">CO</option>
  <option value="CT">CT</option>
  <option value="DE">DE</option>
  <option value="DC">DC</option>
  <option value="FL">FL</option>
  <option value="GA">GA</option>
  <option value="HI">HI</option>
  <option value="ID">ID</option>
  <option value="IL">IL</option>
  <option value="IN">IN</option>
  <option value="IA">IA</option>
  <option value="KS">KS</option>
  <option value="KY">KY</option>
  <option value="LA">LA</option>
  <option value="ME">ME</option>
  <option value="MD">MD</option>
  <option value="MA">MA</option>
  <option value="MI">MI</option>
  <option value="MN">MN</option>
  <option value="MS">MS</option>
  <option value="MO">MO</option>
  <option value="MT">MT</option>
  <option value="NE">NE</option>
  <option value="NV">NV</option>
  <option value="NH">NH</option>
  <option value="NJ">NJ</option>
  <option value="NM">NM</option>
  <option value="NY">NY</option>
  <option value="NC">NC</option>
  <option value="ND">ND</option>
  <option value="OH">OH</option>
  <option value="OK">OK</option>
  <option value="OR">OR</option>
  <option value="PA">PA</option>
  <option value="RI">RI</option>
  <option value="SC">SC</option>
  <option value="SD">SD</option>
  <option value="TN">TN</option>
  <option value="TX">TX</option>
  <option value="UT">UT</option>
  <option value="VT">VT</option>
  <option value="VA">VA</option>
  <option value="WA">WA</option>
  <option value="WV">WV</option>
  <option value="WI">WI</option>
  <option value="WY">WY</option>
</select>
    </div>
    <div class="form-group col-md-4">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
  </div>
  <button type="submit" class="btn btn-primary" onclick="closeCreateVendorForm()">Create Vendor</button>
</form>
<br>
<br>
`;
//On click of create vendor button
function closeCreateVendorForm() {
    document.querySelector("#createVendorContainer").style.display = "none";
    }

//On click of budget forecast button
