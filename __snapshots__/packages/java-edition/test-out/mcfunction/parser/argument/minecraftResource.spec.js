exports['mcfunction argument minecraft:resource Parse "012" with {"registry":"bossbar"} 1'] = {
  "node": {
    "type": "resource_location",
    "range": {
      "start": 0,
      "end": 3
    },
    "path": [
      "012"
    ]
  },
  "errors": []
}

exports['mcfunction argument minecraft:resource Parse "foo" with {"registry":"bossbar"} 1'] = {
  "node": {
    "type": "resource_location",
    "range": {
      "start": 0,
      "end": 3
    },
    "path": [
      "foo"
    ]
  },
  "errors": []
}

exports['mcfunction argument minecraft:resource Parse "foo:bar" with {"registry":"bossbar"} 1'] = {
  "node": {
    "type": "resource_location",
    "range": {
      "start": 0,
      "end": 7
    },
    "namespace": "foo",
    "path": [
      "bar"
    ]
  },
  "errors": []
}
