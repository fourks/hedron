// TODO: Everywhere types are being used should be filled with functions here. Eventually this can become
// a plugin system where custom types can be loaded in by users, following the same API

const lerp = (v0, v1, t) => (1 - t) * v0 + t * v1

class ValueType {
  get canDoMacro () { return typeof this.macroInterpolate === 'function' }
  getTransformedValue (param) { return param.value }
}

class TypeFloat extends ValueType {
    defaultValue = 0
    doesValueMatch (value) {
      return typeof value === 'number'
    }
    getTransformedValue (param) {
      if (typeof param.min === 'number' && typeof param.max === 'number') {
        return lerp(param.min, param.max, param.value)
      } else {
        return param.value
      }
    }
    macroInterpolate = lerp
}

class TypeBoolean extends ValueType {
    defaultValue = false
    doesValueMatch (value) {
      return typeof value === 'boolean'
    }
    macroInterpolate (s, t, i) {
      return i > 0.99 ? t : s
    }
}

const types = {
  float: new TypeFloat(),
  boolean: new TypeBoolean(),
}

export const getType = typeName => types[typeName] || types['float']
