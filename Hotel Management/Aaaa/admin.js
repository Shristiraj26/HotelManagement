function showSection(sectionId) {
    document.getElementById('manageRoom').style.display = 'none';
    document.getElementById('customerCheckIn').style.display = 'none';
    document.getElementById('customerCheckOut').style.display = 'none';
    document.getElementById(sectionId).style.display = 'block';
}

function showAddRoomModal() {
    $('#addRoomModal').modal('show');
}

document.getElementById('addRoomForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const roomNumber = document.getElementById('roomNumber').value;
    const roomType = document.getElementById('roomType').value;
    const bed = document.getElementById('bed').value;
    const price = document.getElementById('price').value;
    const status = document.getElementById('status').value;

    addRoomRow(roomNumber, roomType, bed, price, status);
    $('#addRoomModal').modal('hide');
});

function addRoomRow(roomNumber, roomType, bed, price, status) {
    const tableBody = document.querySelector('#manageRoom tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${roomNumber}</td>
        <td>${roomType}</td>
        <td>${bed}</td>
        <td>${price}</td>
        <td>${status}</td>
    `;
    row.ondblclick = function() {
        showUpdateRoomModal(roomNumber, roomType, bed, price, status, row);
    };
    tableBody.appendChild(row);
}

function showUpdateRoomModal(roomNumber, roomType, bed, price, status, row) {
    document.getElementById('updateRoomNumber').value = roomNumber;
    document.getElementById('updateRoomType').value = roomType;
    document.getElementById('updateBed').value = bed;
    document.getElementById('updatePrice').value = price;
    document.getElementById('updateStatus').value = status;

    document.getElementById('updateRoomForm').onsubmit = function(event) {
        event.preventDefault();
        updateRoom(row);
    };

    document.getElementById('deleteRoomButton').onclick = function() {
        deleteRoom(row);
    };

    $('#updateRoomModal').modal('show');
}

function updateRoom(row) {
    const roomNumber = document.getElementById('updateRoomNumber').value;
    const roomType = document.getElementById('updateRoomType').value;
    const bed = document.getElementById('updateBed').value;
    const price = document.getElementById('updatePrice').value;
    const status = document.getElementById('updateStatus').value;

    row.innerHTML = `
        <td>${roomNumber}</td>
        <td>${roomType}</td>
        <td>${bed}</td>
        <td>${price}</td>
        <td>${status}</td>
    `;
    row.ondblclick = function() {
        showUpdateRoomModal(roomNumber, roomType, bed, price, status, row);
    };

    $('#updateRoomModal').modal('hide');
}

function deleteRoom(row) {
    row.remove();
    $('#updateRoomModal').modal('hide');
}