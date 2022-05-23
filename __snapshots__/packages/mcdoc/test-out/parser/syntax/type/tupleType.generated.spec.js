exports['mcdoc tupleType Parse "" 1'] = {
  "node": "FAILURE",
  "errors": []
}

exports['mcdoc tupleType Parse "[" 1'] = {
  "node": "FAILURE",
  "errors": [
    {
      "range": {
        "start": 1,
        "end": 1
      },
      "message": "Expected an identifier",
      "severity": 3
    }
  ]
}

exports['mcdoc tupleType Parse "[]" 1'] = {
  "node": "FAILURE",
  "errors": [
    {
      "range": {
        "start": 1,
        "end": 1
      },
      "message": "Expected an identifier",
      "severity": 3
    }
  ]
}

exports['mcdoc tupleType Parse "[boolean" 1'] = {
  "node": "FAILURE",
  "errors": []
}

exports['mcdoc tupleType Parse "[boolean," 1'] = {
  "node": {
    "type": "mcdoc:type/tuple",
    "children": [
      {
        "type": "mcdoc:type/boolean",
        "children": [
          {
            "type": "mcdoc:literal",
            "range": {
              "start": 1,
              "end": 8
            },
            "value": "boolean",
            "colorTokenType": "type"
          }
        ],
        "range": {
          "start": 1,
          "end": 8
        }
      },
      {
        "type": "mcdoc:type/path",
        "children": [
          {
            "type": "mcdoc:path",
            "children": [
              {
                "type": "mcdoc:identifier",
                "range": {
                  "start": 9,
                  "end": 9
                },
                "value": ""
              }
            ],
            "range": {
              "start": 9,
              "end": 9
            }
          }
        ],
        "range": {
          "start": 9,
          "end": 9
        }
      }
    ],
    "range": {
      "start": 0,
      "end": 9
    }
  },
  "errors": [
    {
      "range": {
        "start": 9,
        "end": 9
      },
      "message": "Expected an identifier",
      "severity": 3
    },
    {
      "range": {
        "start": 9,
        "end": 9
      },
      "message": "Expected “]” but got “”",
      "severity": 3
    }
  ]
}

exports['mcdoc tupleType Parse "[boolean,]" 1'] = {
  "node": {
    "type": "mcdoc:type/tuple",
    "children": [
      {
        "type": "mcdoc:type/boolean",
        "children": [
          {
            "type": "mcdoc:literal",
            "range": {
              "start": 1,
              "end": 8
            },
            "value": "boolean",
            "colorTokenType": "type"
          }
        ],
        "range": {
          "start": 1,
          "end": 8
        }
      }
    ],
    "range": {
      "start": 0,
      "end": 10
    }
  },
  "errors": []
}

exports['mcdoc tupleType Parse "[boolean,string]" 1'] = {
  "node": {
    "type": "mcdoc:type/tuple",
    "children": [
      {
        "type": "mcdoc:type/boolean",
        "children": [
          {
            "type": "mcdoc:literal",
            "range": {
              "start": 1,
              "end": 8
            },
            "value": "boolean",
            "colorTokenType": "type"
          }
        ],
        "range": {
          "start": 1,
          "end": 8
        }
      },
      {
        "type": "mcdoc:type/string",
        "children": [
          {
            "type": "mcdoc:literal",
            "range": {
              "start": 9,
              "end": 15
            },
            "value": "string",
            "colorTokenType": "type"
          }
        ],
        "range": {
          "start": 9,
          "end": 15
        }
      }
    ],
    "range": {
      "start": 0,
      "end": 16
    }
  },
  "errors": []
}

exports['mcdoc tupleType Parse "[boolean]" 1'] = {
  "node": "FAILURE",
  "errors": []
}

exports['mcdoc tupleType Parse "[false,true,[string,],]" 1'] = {
  "node": {
    "type": "mcdoc:type/tuple",
    "children": [
      {
        "type": "mcdoc:type/literal",
        "children": [
          {
            "type": "mcdoc:literal",
            "range": {
              "start": 1,
              "end": 6
            },
            "value": "false",
            "colorTokenType": "type"
          }
        ],
        "range": {
          "start": 1,
          "end": 6
        }
      },
      {
        "type": "mcdoc:type/literal",
        "children": [
          {
            "type": "mcdoc:literal",
            "range": {
              "start": 7,
              "end": 11
            },
            "value": "true",
            "colorTokenType": "type"
          }
        ],
        "range": {
          "start": 7,
          "end": 11
        }
      },
      {
        "type": "mcdoc:type/tuple",
        "children": [
          {
            "type": "mcdoc:type/string",
            "children": [
              {
                "type": "mcdoc:literal",
                "range": {
                  "start": 13,
                  "end": 19
                },
                "value": "string",
                "colorTokenType": "type"
              }
            ],
            "range": {
              "start": 13,
              "end": 19
            }
          }
        ],
        "range": {
          "start": 12,
          "end": 21
        }
      }
    ],
    "range": {
      "start": 0,
      "end": 23
    }
  },
  "errors": []
}
