var Position;
(function (Position) {
    Position[Position["Top_Left"] = 0] = "Top_Left";
    Position[Position["Top_Right"] = 1] = "Top_Right";
    Position[Position["Top_Center"] = 2] = "Top_Center";
    Position[Position["Bottom_Left"] = 3] = "Bottom_Left";
    Position[Position["Bottom_Right"] = 4] = "Bottom_Right";
    Position[Position["Bottom_Center"] = 5] = "Bottom_Center";
})(Position || (Position = {}));
var Alerttype;
(function (Alerttype) {
    Alerttype[Alerttype["Success"] = 0] = "Success";
    Alerttype[Alerttype["Error"] = 1] = "Error";
})(Alerttype || (Alerttype = {}));
function customAlert(obj) {
    const alertElement = document.createElement('div');
    document.body.appendChild(alertElement);
    alertElement.style.display = 'flex';
    alertElement.style.gap = '5px';
    alertElement.style.alignItems = 'center';
    alertElement.style.position = 'fixed';
    alertElement.style.backgroundColor = 'white';
    alertElement.style.padding = '10px 20px';
    alertElement.style.borderRadius = '7px';
    alertElement.style.boxShadow = '0px 2px 10px #00000034';
    alertElement.style.fontSize = '18px';
    alertElement.style.fontWeight = '500';
    alertElement.style.fontFamily = '"Roboto", sans-serif';
    alertElement.style.maxWidth = "500px";
    alertElement.style.wordBreak = 'break-all';
    switch (obj.position) {
        case Position.Top_Left: {
            alertElement.style.top = '2%';
            alertElement.style.left = '2%';
            break;
        }
        case Position.Top_Right: {
            alertElement.style.top = '2%';
            alertElement.style.right = '2%';
            break;
        }
        case Position.Top_Center: {
            alertElement.style.top = '2%';
            alertElement.style.left = '50%';
            alertElement.style.transform = 'translate(-50%, 0%)';
            break;
        }
        case Position.Bottom_Left: {
            alertElement.style.bottom = '2%';
            alertElement.style.left = '2%';
            break;
        }
        case Position.Bottom_Right: {
            alertElement.style.bottom = '2%';
            alertElement.style.right = '2%';
            break;
        }
        case Position.Bottom_Center: {
            alertElement.style.bottom = '2%';
            alertElement.style.left = '50%';
            alertElement.style.transform = 'translate(-50%, 0%)';
            break;
        }
        default: {
            alertElement.style.top = '2%';
            alertElement.style.right = '2%';
            break;
        }
    }
    switch (obj.type) {
        case Alerttype.Success: {
            alertElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="size-6">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
            </svg>`;
            alertElement.innerHTML += `${obj.message}`;
            break;
        }
        case Alerttype.Error: {
            alertElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="size-6">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
            </svg>
            `;
            alertElement.innerHTML += `${obj.message}`;
            break;
        }
        default: {
            alertElement.innerHTML += `${obj.message}`;
            break;
        }
    }
    if (alertElement.querySelector('svg')) {
        alertElement.querySelector('svg').style.minWidth = '30px';
        alertElement.querySelector('svg').style.width = '30px';
    }
    setTimeout(() => {
        alertElement.remove();
    }, obj.timer || 3000);
}
export { customAlert, Position, Alerttype };
