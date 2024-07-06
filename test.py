import openpyxl
import random

# create a new workbook and select the active sheet
workbook = openpyxl.load_workbook('sheet.xlsx')
sheet = workbook.active

# loop through rows 1 to 5
for row in range(1, 6):
    print('Row ', row)
    # loop through the first 5 cells in the row
    for col in range(1, 6):
        print('Col ', col)
        # generate a random value between 0 and 100
        value = random.randint(0, 100)
        # set the cell value to the random value
        sheet.cell(row=row, column=col, value=value)

# save the workbook
workbook.save('sheet.xlsx')
