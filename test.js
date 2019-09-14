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
    t.is(output.words.length, 55);
    t.is(output.words[0][0], 'with');
    t.is(output.words[0][1], 2);
    t.is(output.meta.words, 73);
    t.is(output.meta.grade, 'C1');
    t.is(output.meta.mean, 2338.054794520548);
    t.is(output.meta.max, 26786);
    t.is(output.meta.levels.A1, 52.054794520547944);
    t.is(output.meta.levels.A2, 60.273972602739725);
    t.is(output.meta.levels.B1, 73.97260273972603);
    t.is(output.meta.levels.B2, 84.93150684931507);
    t.is(output.meta.levels.C1, 94.52054794520548);
    t.is(output.meta.levels.C2, 98.63013698630137);
});