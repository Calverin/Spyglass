exports['mcdoc floatRange Parse "" 1'] = {
  "node": {
    "type": "mcdoc:float_range",
    "children": [
      {
        "type": "float",
        "range": {
          "start": 0,
          "end": 0
        },
        "value": 0
      }
    ],
    "range": {
      "start": 0,
      "end": 0
    }
  },
  "errors": [
    {
      "range": {
        "start": 0,
        "end": 0
      },
      "message": "Expected a float",
      "severity": 3
    }
  ]
}

exports['mcdoc floatRange Parse "../9.1" 1'] = {
  "node": {
    "type": "mcdoc:float_range",
    "children": [
      {
        "type": "mcdoc:literal",
        "range": {
          "start": 0,
          "end": 3
        },
        "value": "../"
      },
      {
        "type": "float",
        "range": {
          "start": 3,
          "end": 6
        },
        "value": 9.1
      }
    ],
    "range": {
      "start": 0,
      "end": 6
    }
  },
  "errors": []
}

exports['mcdoc floatRange Parse "..9.1" 1'] = {
  "node": {
    "type": "mcdoc:float_range",
    "children": [
      {
        "type": "mcdoc:literal",
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
        "value": 9.1
      }
    ],
    "range": {
      "start": 0,
      "end": 5
    }
  },
  "errors": []
}

exports['mcdoc floatRange Parse "4.2" 1'] = {
  "node": {
    "type": "mcdoc:float_range",
    "children": [
      {
        "type": "float",
        "range": {
          "start": 0,
          "end": 3
        },
        "value": 4.2
      }
    ],
    "range": {
      "start": 0,
      "end": 3
    }
  },
  "errors": []
}

exports['mcdoc floatRange Parse "4.2.." 1'] = {
  "node": {
    "type": "mcdoc:float_range",
    "children": [
      {
        "type": "float",
        "range": {
          "start": 0,
          "end": 3
        },
        "value": 4.2
      },
      {
        "type": "mcdoc:literal",
        "range": {
          "start": 3,
          "end": 5
        },
        "value": ".."
      }
    ],
    "range": {
      "start": 0,
      "end": 5
    }
  },
  "errors": []
}

exports['mcdoc floatRange Parse "4.2..9.1" 1'] = {
  "node": {
    "type": "mcdoc:float_range",
    "children": [
      {
        "type": "float",
        "range": {
          "start": 0,
          "end": 3
        },
        "value": 4.2
      },
      {
        "type": "mcdoc:literal",
        "range": {
          "start": 3,
          "end": 5
        },
        "value": ".."
      },
      {
        "type": "float",
        "range": {
          "start": 5,
          "end": 8
        },
        "value": 9.1
      }
    ],
    "range": {
      "start": 0,
      "end": 8
    }
  },
  "errors": []
}

exports['mcdoc floatRange Parse "4.2/.." 1'] = {
  "node": {
    "type": "mcdoc:float_range",
    "children": [
      {
        "type": "float",
        "range": {
          "start": 0,
          "end": 3
        },
        "value": 4.2
      },
      {
        "type": "mcdoc:literal",
        "range": {
          "start": 3,
          "end": 6
        },
        "value": "/.."
      }
    ],
    "range": {
      "start": 0,
      "end": 6
    }
  },
  "errors": []
}

exports['mcdoc floatRange Parse "4.2/../9.1" 1'] = {
  "node": {
    "type": "mcdoc:float_range",
    "children": [
      {
        "type": "float",
        "range": {
          "start": 0,
          "end": 3
        },
        "value": 4.2
      },
      {
        "type": "mcdoc:literal",
        "range": {
          "start": 3,
          "end": 7
        },
        "value": "/../"
      },
      {
        "type": "float",
        "range": {
          "start": 7,
          "end": 10
        },
        "value": 9.1
      }
    ],
    "range": {
      "start": 0,
      "end": 10
    }
  },
  "errors": []
}
