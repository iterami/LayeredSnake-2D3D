'use strict';

function draw_logic(){
    draw_recursive(last_entity);
}

function logic(){
    if(core_storage_data['mouse-lock']
      || core_mouse['down-0']){
        entity_entities[top_layer]['x'] = core_mouse['x'] - core_storage_data['layer-width'] / 2;
        entity_entities[top_layer]['y'] = core_mouse['y'] - core_storage_data['layer-height'] / 2;
    }

    logic_recursive(last_entity);
}

function repo_init(){
    core_repo_init({
      'globals': {
        'last_entity': '',
        'top_layer': 0,
      },
      'events': {
        'explode': {
          'onclick': core_repo_reset,
        },
      },
      'info': '<input id=explode type=button value=Explode>',
      'mousebinds': {
        'mousedown': {},
        'mousemove': {},
      },
      'reset': canvas_setmode,
      'storage': {
        'layer-height': 100,
        'layer-random': 0,
        'layer-speed': 3,
        'layer-width': 100,
        'mouse-lock': true,
        'snake-length': 99,
      },
      'storage-menu': '<table><tr><td><input id=layer-height><td>Layer Height'
        + '<tr><td><input id=layer-random><td>Layer Movement Randomness'
        + '<tr><td><input id=layer-width><td>Layer Width'
        + '<tr><td><input id=layer-speed><td>Layer Speed'
        + '<tr><td><input id=snake-length><td>Length'
        + '<tr><td><input id=mouse-lock type=checkbox><td>Mouse Lock</table>',
      'title': 'LayeredSnake-2D3D.htm',
    });
    canvas_init();
}
