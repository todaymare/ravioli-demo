/* tslint:disable */
/* eslint-disable */

/**
 * Format that each sample has. Usually, this corresponds to the sampling
 * depth of the audio source. For example, 16 bit quantized samples can be
 * encoded in `i16` or `u16`. Note that the quantized sampling depth is not
 * directly visible for formats where [`is_float`] is true.
 *
 * Also note that the backend must support the encoding of the quantized
 * samples in the given format, as there is no generic transformation from one
 * format into the other done inside the frontend-library code. You can query
 * the supported formats by using [`supported_input_configs`].
 *
 * A good rule of thumb is to use [`SampleFormat::I16`] as this covers typical
 * music (WAV, MP3) as well as typical audio input devices on most platforms,
 *
 * [`is_float`]: SampleFormat::is_float
 * [`supported_input_configs`]: crate::traits::DeviceTrait::supported_input_configs
 */
export enum SampleFormat {
  /**
   * `i8` with a valid range of `i8::MIN..=i8::MAX` with `0` being the origin.
   */
  I8 = 0,
  /**
   * `i16` with a valid range of `i16::MIN..=i16::MAX` with `0` being the origin.
   */
  I16 = 1,
  /**
   * `I24` with a valid range of `-(1 << 23)..=((1 << 23) - 1)` with `0` being the origin.
   *
   * This format uses 4 bytes of storage but only 24 bits are significant.
   */
  I24 = 2,
  /**
   * `i32` with a valid range of `i32::MIN..=i32::MAX` with `0` being the origin.
   */
  I32 = 3,
  /**
   * `i64` with a valid range of `i64::MIN..=i64::MAX` with `0` being the origin.
   */
  I64 = 4,
  /**
   * `u8` with a valid range of `u8::MIN..=u8::MAX` with `1 << 7 == 128` being the origin.
   */
  U8 = 5,
  /**
   * `u16` with a valid range of `u16::MIN..=u16::MAX` with `1 << 15 == 32768` being the origin.
   */
  U16 = 6,
  /**
   * `U24` with a valid range of `0..=((1 << 24) - 1)` with `1 << 23 == 8388608` being the origin.
   *
   * This format uses 4 bytes of storage but only 24 bits are significant.
   */
  U24 = 7,
  /**
   * `u32` with a valid range of `u32::MIN..=u32::MAX` with `1 << 31` being the origin.
   */
  U32 = 8,
  /**
   * `U48` with a valid range of '0..(1 << 48)' with `1 << 47` being the origin
   * `u64` with a valid range of `u64::MIN..=u64::MAX` with `1 << 63` being the origin.
   */
  U64 = 9,
  /**
   * `f32` with a valid range of `-1.0..=1.0` with `0.0` being the origin.
   */
  F32 = 10,
  /**
   * `f64` with a valid range of `-1.0..=1.0` with `0.0` being the origin.
   */
  F64 = 11,
  /**
   * DSD 1-bit stream in u8 container (8 bits = 8 DSD samples) with 0x69 being the silence byte pattern.
   */
  DsdU8 = 12,
  /**
   * DSD 1-bit stream in u16 container (16 bits = 16 DSD samples) with 0x69 being the silence byte pattern.
   */
  DsdU16 = 13,
  /**
   * DSD 1-bit stream in u32 container (32 bits = 32 DSD samples) with 0x69 being the silence byte pattern.
   */
  DsdU32 = 14,
}

export class StreamConfig {
  private constructor();
  free(): void;
  [Symbol.dispose](): void;
  channels: number;
  sample_rate: number;
  get buffer_size(): number | undefined;
  set buffer_size(value: number | null | undefined);
}

export function wasm_main(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly wasm_main: () => void;
  readonly main: (a: number, b: number) => number;
  readonly __wbg_get_streamconfig_buffer_size: (a: number) => number;
  readonly __wbg_get_streamconfig_channels: (a: number) => number;
  readonly __wbg_get_streamconfig_sample_rate: (a: number) => number;
  readonly __wbg_set_streamconfig_buffer_size: (a: number, b: number) => void;
  readonly __wbg_set_streamconfig_channels: (a: number, b: number) => void;
  readonly __wbg_set_streamconfig_sample_rate: (a: number, b: number) => void;
  readonly __wbg_streamconfig_free: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h789ebf5b96577c94: (a: number, b: number, c: any, d: any) => void;
  readonly wasm_bindgen__closure__destroy__h1989f454568bddef: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h1b6594f64db28f52: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__convert__closures_____invoke__hb84f4c669decbad9: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__closure__destroy__h9a615acc43eaaf56: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__ha65b985164ea7398: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h813d55a4a10a456d: (a: number, b: number) => void;
  readonly wasm_bindgen__closure__destroy__hd735fc705332b4b0: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h08e68759614afa00: (a: number, b: number, c: any, d: any) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
