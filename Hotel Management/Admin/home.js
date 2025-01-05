function manageRooms() {
    alert("Navigating to Manage Room Page...");
    // Add navigation or logic
}

function checkIn() {
    alert("Navigating to Customer Check-In Page...");
    // Add navigation or logic
}

function checkOut() {
    alert("Navigating to Customer Check-Out Page...");
    // Add navigation or logic
}

function viewBill() {
    alert("Navigating to Customer Details Bill Page...");
    // Add navigation or logic
}

function logout() {
    alert("Logging out...");
    // Add navigation or logic for logout
}

function closeTab() {
    if (confirm("Are you sure you want to close this tab?")) {
        window.close();
    }
}

// Show Manage Room section
document.getElementById("manage-room-btn").addEventListener("click", function () {
    document.getElementById("manage-room-section").classList.remove("hidden");
});
document.getElementById("customer-checkin-btn").addEventListener("click", function () {
    document.getElementById("check-in-section").classList.remove("hidden");
});
// Close tab functionality
function closeTab() {
    alert("Closing Tab...");
}

// Handle double click on row to edit or delete
function editRoom(row) {
    const cells = row.getElementsByTagName("td");
    const roomDetails = {
        roomNo: cells[0].innerText,
        roomType: cells[1].innerText,
        bed: cells[2].innerText,
        price: cells[3].innerText,
        status: cells[4].innerText,
    };

    const newDetails = prompt(`Edit Room Details\n${JSON.stringify(roomDetails, null, 2)}`, JSON.stringify(roomDetails));
    if (newDetails) {
        const updatedRoom = JSON.parse(newDetails);
        cells[0].innerText = updatedRoom.roomNo;
        cells[1].innerText = updatedRoom.roomType;
        cells[2].innerText = updatedRoom.bed;
        cells[3].innerText = updatedRoom.price;
        cells[4].innerText = updatedRoom.status;
    }

    if (confirm("Do you want to delete this room?")) {
        row.remove();
    }
}

// Add room button functionality
document.getElementById("add-room-btn").addEventListener("click", function () {
    const tableBody = document.querySelector("#room-table tbody");
    const newRow = document.createElement("tr");
    newRow.ondblclick = () => editRoom(newRow);

    newRow.innerHTML = `
        <td contenteditable="true">New Room</td>
        <td contenteditable="true">AC</td>
        <td contenteditable="true">Single</td>
        <td contenteditable="true">1000</td>
        <td contenteditable="true">Not Booked</td>
    `;
    tableBody.appendChild(newRow);
});




// Elements
const manageRoomBtn = document.getElementById("manage-room-btn");
const customerCheckinBtn = document.getElementById("customer-checkin-btn");
const contentArea = document.getElementById("card-content");

// Close tab functionality
function closeTab() {
    alert("Closing Tab...");
}

// Load dynamic content
function loadContent(content) {
    contentArea.innerHTML = content;
    contentArea.style.display = "block";
}

// Event Listeners
customerCheckinBtn.addEventListener("click", () => {
    loadContent(`
        <h2>Customer Check In</h2>
        <form class="check-in-form">
            <div class="form-row">
                <label>Name</label>
                <input type="text" placeholder="Enter Name" />
            </div>
            <div class="form-row">
                <label>Mobile Number</label>
                <input type="text" placeholder="Enter Mobile Number" />
            </div>
            <div class="form-row">
                <label>Email</label>
                <input type="email" placeholder="Enter Email" />
            </div>
            <div class="form-row">
                <label>Gender</label>
                <select>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
            <div class="form-row">
                <label>Nationality</label>
                <input type="text" placeholder="Enter Nationality" />
            </div>
            <div class="form-row">
                <label>Adhar Number</label>
                <input type="text" placeholder="Enter Adhar Number" />
            </div>
            <div class="form-row">
                <label>Address</label>
                <input type="text" placeholder="Enter Address" />
            </div>
            <div class="form-row">
                <label>Check In Date</label>
                <input type="date" />
            </div>
            <div class="form-row">
                <label>Room Type</label>
                <select>
                    <option>AC</option>
                    <option>Non-AC</option>
                </select>
            </div>
            <div class="form-row">
                <label>Bed</label>
                <select>
                    <option>Single</option>
                    <option>Double</option>
                </select>
            </div>
            <div class="form-row">
                <label>Room Number</label>
                <input type="number" placeholder="Enter Room Number" />
            </div>
            <div class="form-row">
                <label>Price</label>
                <input type="number" placeholder="Enter Price" />
            </div>
            <div class="form-actions">
                <button type="submit" class="allot-btn">Allote Room</button>
                <button type="reset" class="clear-btn">Clear</button>
            </div>
        </form>
    `);
});


// Check In
// Select the check-in button and content area
const checkInButton = document.getElementById("checkInButton");
const contentArea1 = document.getElementById("content-area");

// Add event listener to the check-in button
checkInButton.addEventListener("click", () => {
    // Inject the Customer Check-In form into the content area
    contentArea1.innerHTML = `
        <div class="customer-check-in">
            <div class="form-container">
                <h3>Customer Check IN</h3>
                <form>
                    <div class="form-left">
                        <label for="name">Name</label>
                        <input type="text" id="name" placeholder="Enter Name">

                        <label for="mobile">Mobile Number</label>
                        <input type="text" id="mobile" placeholder="Enter Mobile Number">

                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="Enter Email">

                        <label for="gender">Gender</label>
                        <select id="gender">
                            <option>Male</option>
                            <option>Female</option>
                        </select>

                        <label for="nationality">Nationality</label>
                        <input type="text" id="nationality" placeholder="Enter Nationality">

                        <label for="aadhaar">Aadhaar Number</label>
                        <input type="text" id="aadhaar" placeholder="Enter Aadhaar Number">

                        <label for="address">Address</label>
                        <input type="text" id="address" placeholder="Enter Address">
                    </div>
                    <div class="form-right">
                        <label for="checkin-date">Check-In Date (Today)</label>
                        <input type="date" id="checkin-date">

                        <label for="room-type">Room Type</label>
                        <select id="room-type">
                            <option>AC</option>
                            <option>Non-AC</option>
                        </select>

                        <label for="bed">Bed</label>
                        <select id="bed">
                            <option>Single</option>
                            <option>Double</option>
                        </select>

                        <label for="room-number">Room Number</label>
                        <input type="text" id="room-number" placeholder="Enter Room Number">

                        <label for="price">Price</label>
                        <input type="text" id="price" placeholder="Enter Price">
                    </div>
                    <div class="action-buttons">
                        <button type="submit" class="allot-btn">Allot Room</button>
                        <button type="reset" class="clear-btn">Clear</button>
                    </div>
                </form>
            </div>
        </div>
    `;
});
