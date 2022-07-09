exports['mcfunction argument minecraft:float_range Parse "-100.76.." 1'] = {
  "node": {
    "type": "mcfunction:float_range",
    "range": {
      "start": 0,
      "end": 9
    },
    "children": [
      {
        "type": "float",
        "range": {
          "start": 0,
          "end": 7
        },
        "value": -100.76
      },
      {
        "type": "literal",
        "range": {
          "start": 7,
          "end": 9
        },
        "value": ".."
      }
    ],
    "value": [
      -100.76,
      null
    ]
  },
  "errors": []
}

exports['mcfunction argument minecraft:float_range Parse "-5.4" 1'] = {
  "node": {
    "type": "mcfunction:float_range",
    "range": {
      "start": 0,
      "end": 4
    },
    "children": [
      {
        "type": "float",
        "range": {
          "start": 0,
          "end": 4
        },
        "value": -5.4
      }
    ],
    "value": [
      -5.4,
      -5.4
    ]
  },
  "errors": []
}

exports['mcfunction argument minecraft:float_range Parse ".." 1'] = {
  "node": "FAILURE",
  "errors": []
}

exports['mcfunction argument minecraft:float_range Parse "..100" 1'] = {
  "node": {
    "type": "mcfunction:float_range",
    "range": {
      "start": 0,
      "end": 5
    },
    "children": [
      {
        "type": "literal",
        "range": {
          "start": 0,
          "end": 2
        },
        "value": ".."
      },
      {
        "type": "float",
        "range": {
          "start": 2,
          "end": 5
        },
        "value": 100
      }
    ],
    "value": [
      null,
      100
    ]
  },
  "errors": []
}

exports['mcfunction argument minecraft:float_range Parse "0" 1'] = {
  "node": {
    "type": "mcfunction:float_range",
    "range": {
      "start": 0,
      "end": 1
    },
    "children": [
      {
        "type": "float",
        "range": {
          "start": 0,
          "end": 1
        },
        "value": 0
      }
    ],
    "value": [
      0,
      0
    ]
  },
  "errors": []
}

exports['mcfunction argument minecraft:float_range Parse "0..5.2" 1'] = {
  "node": {
    "type": "mcfunction:float_range",
    "range": {
      "start": 0,
      "end": 6
    },
    "children": [
      {
        "type": "float",
        "range": {
          "start": 0,
          "end": 1
        },
        "value": 0
      },
      {
        "type": "literal",
        "range": {
          "start": 1,
          "end": 3
        },
        "value": ".."
      },
      {
        "type": "float",
        "range": {
          "start": 3,
          "end": 6
        },
        "value": 5.2
      }
    ],
    "value": [
      0,
      5.2
    ]
  },
  "errors": []
}
