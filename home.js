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

let purchaseTemplate = `<div class="poBtnContainer"><button class="button button3 w3-quarter">Create Purchase Order</button>
<button class="button button3 w3-quarter">Vendor Options</button>
</div>`;
let renderPurchasingTable = function (template, selector) {
	let node = document.querySelector(selector);
	if (!node) return;
	node.innerHTML = template;
};

let receivingTemplate = `<div class="poBtnContainer"><button class="button button4 w3-quarter">Receive Purchase Order</button>
<button class="button button4 w3-quarter">Purchase Order History</button>
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

