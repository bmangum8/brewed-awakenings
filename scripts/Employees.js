import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const orders = getOrders()
const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`  //changed from employeeId
    }

    html += "</ul>"

    return html
}


/*Book 4, #5--
when user clicks on the name of an employee, create event listener. 
will show alert "${employee} sold ${#} of products"--will use string interpolation

html stuff:
need-- id of employee
.split at "--"" and make new variable name of employeeId
then parseInt it back to integer

---need to find out how many products (use order database) each employee sold:
use findEmployee()---no, tells us which employee sold a given product. We want to know the number of products
make empty variable and start at 0
loop through orders
if employee.id === order.employeeId
add 1 to empty variable
return the variable
save as a new variable? put in string interpolation?
*/

const employeeOrders = (_employeeId) => {
    let fulfilledOrders = 0

    for (const order of orders) {
        if (order.employeeId === _employeeId) {
            // Increment the number of fulfilled orders
            fulfilledOrders += 1
        }
    }
return fulfilledOrders
    // Return how many orders were fulfilled
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {

                    const orderCount = employeeOrders(parseInt(employeeId))

                    window.alert(` ${employee.name} sold ${orderCount} products `)
                }
            }
        }
    }
)




