const rules = {
  some_form: {
    name: [],
  },
}

const validators = {
  required: (value) => {
    if (value.length === 0) return 'Обязательное поле'
    return ''
  },
}

export default (formName, formValues) => {
  if (!formName) throw new Error('VALIDATION ERROR: formName is required')
  const errors = {}
  for (const field in formValues) {
    const value = formValues[field]
    const currentRules = rules[formName][field]

    errors[field] = ''
    currentRules.forEach((rule) => {
      errors[field] = validators[rule](value, formValues)
    })
  }
  return errors
}
