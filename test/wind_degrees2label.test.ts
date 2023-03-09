import { expect, test } from 'vitest';
import { wind_degrees2label } from '../src/scripts/wind_degrees2label';

test('convert 0 to N', () => {
    expect(wind_degrees2label(0)).toBe("N");
});

test('convert 90 to E', () => {
    expect(wind_degrees2label(90)).toBe("E");
});

test('convert 180 to S', () => {
    expect(wind_degrees2label(180)).toBe("S");
});

test('convert 270 to W', () => {
    expect(wind_degrees2label(270)).toBe("W");
});

test('convert 360 to N', () => {
    expect(wind_degrees2label(360)).toBe("N");
});
