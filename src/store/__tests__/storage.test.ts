import { LocalStorageKeys, storage } from "store/storage";



describe('(utils/storage.ts)', () => {
  it('can read from and write to storage via storage helper', () => {
    storage.write(LocalStorageKeys.CONNECTED_TO_WALLET_ONCE, true);
    const v = storage.read(LocalStorageKeys.CONNECTED_TO_WALLET_ONCE);
    expect(v).toBe(true);
  })
})