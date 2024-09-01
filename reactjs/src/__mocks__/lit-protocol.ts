const mockConnect = jest.fn().mockResolvedValue(undefined);
const MockLitNodeClient = jest.fn().mockImplementation(() => ({
  connect: mockConnect,
}));

export { MockLitNodeClient, mockConnect };

export const LitNetwork = {
  DatilDev: 'datil-dev',
};