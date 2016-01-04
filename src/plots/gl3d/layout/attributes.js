/**
* Copyright 2012-2016, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/


module.exports = {
    scene: {
        valType: 'sceneid',
        role: 'info',
        dflt: 'scene',
        description: [
            'Sets a reference between this trace\'s 3D coordinate system and',
            'a 3D scene.',
            'If *scene* (the default value), the (x,y,z) coordinates refer to',
            '`layout.scene`.',
            'If *scene2*, the (x,y,z) coordinates refer to `layout.scene2`,',
            'and so on.'
        ].join(' ')
    }
};
