exports['mcfunction argument minecraft:rotation Parse "0 0" 1'] = {
  "node": {
    "type": "mcfunction:vector",
    "range": {
      "start": 0,
      "end": 0
    },
    "children": [
      {
        "type": "mcfunction:coordinate",
        "notation": "",
        "range": {
          "start": 0,
          "end": 1
        },
        "value": 0
      },
      {
        "type": "mcfunction:coordinate",
        "notation": "",
        "range": {
          "start": 2,
          "end": 3
        },
        "value": 0
      }
    ],
    "system": 0
  },
  "errors": []
}

exports['mcfunction argument minecraft:rotation Parse "~ ~" 1'] = {
  "node": {
    "type": "mcfunction:vector",
    "range": {
      "start": 0,
      "end": 0
    },
    "children": [
      {
        "type": "mcfunction:coordinate",
        "notation": "~",
        "range": {
          "start": 0,
          "end": 1
        },
        "value": 0
      },
      {
        "type": "mcfunction:coordinate",
        "notation": "~",
        "range": {
          "start": 2,
          "end": 3
        },
        "value": 0
      }
    ],
    "system": 0
  },
  "errors": []
}

exports['mcfunction argument minecraft:rotation Parse "~-5 ~5" 1'] = {
  "node": {
    "type": "mcfunction:vector",
    "range": {
      "start": 0,
      "end": 0
    },
    "children": [
      {
        "type": "mcfunction:coordinate",
        "notation": "~",
        "range": {
          "start": 0,
          "end": 3
        },
        "value": -5
      },
      {
        "type": "mcfunction:coordinate",
        "notation": "~",
        "range": {
          "start": 4,
          "end": 6
        },
        "value": 5
      }
    ],
    "system": 0
  },
  "errors": []
}
