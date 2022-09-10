def changeNotes(bill_amt, cash_given):
    change_arr = [2000, 500, 100, 20, 10, 5, 1]
    if bill_amt <= 0:
        return "bill amout should be greater than zero"
    else:
        if cash_given < bill_amt:
            return "only the cash amout greater than the bill is accepted"

        else:
            balance = cash_given - bill_amt
            for i in range(len(change_arr)):
                no_of_notes = balance // change_arr[i]
                print(change_arr[i],no_of_notes)
                balance = balance % change_arr[i]

changeNotes(50,100)

