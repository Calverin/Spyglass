exports['mcfunction argument minecraft:function Parse "#foo" 1'] = {
  "node": {
    "type": "resource_location",
    "range": {
      "start": 0,
      "end": 4
    },
    "isTag": true,
    "path": [
      "foo"
    ]
  },
  "errors": []
}

exports['mcfunction argument minecraft:function Parse "foo" 1'] = {
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

exports['mcfunction argument minecraft:function Parse "foo:bar" 1'] = {
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
