const baseUrl = 'api/expenses'

const getAll = async () => {
  // use fetch to get all expenses
  const response = await fetch(baseUrl)
  return response.json()
}

const create = async newObject => {
  // use fetch to create a new expense
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newObject),
  })
  return response.json()
}

// remove the expense

const remove = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  })
  return response.data;
}

export default { getAll, create, remove }