import test from 'ava';
import grade from './index.js';

test('grade the sample text', t => {
    const output = grade(`
        It was the hunter's first time outside Montana.
        He woke, stricken still with the hours-old vision of ascending through rose-lit cumulus,
        of houses and barns like specks deep in the snowed-in valleys,
        all the scrolling country below looking December—brown and black hills streaked with snow,
        flashes of iced-over lakes,
        the long braids of a river gleaming at the bottom of a canyon.
        Above the wing the sky had deepened to a blue so pure he knew it would bring tears to his eyes if he looked long enough.
    `);
    t.is(output.words.length, 52);
    t.is(output.words[0][0], 'with');
    t.is(output.words[0][1], 2);
    t.is(output.meta.mean, 2004.7796610169491);
    t.is(output.meta.max, 9874);
    t.is(output.meta.levels.A1, 35.714285714285715);
    t.is(output.meta.levels.A2, 42.857142857142854);
    t.is(output.meta.levels.B1, 53.57142857142857);
    t.is(output.meta.levels.B2, 71.42857142857143);
    t.is(output.meta.levels.C1, 85.71428571428571);
    t.is(output.meta.levels.C2, 100);
});