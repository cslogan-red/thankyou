import { getTabs } from './TabContentService';

describe('TabContentService unit tests', () => {
  it ('can consume TabContentService.getTabs', () => {
    const runTest = async () => {
      const retVal = await getTabs();
      expect(retVal[0].id).toEqual('Thank');
      expect(retVal[1].id).toEqual('You')
      expect(retVal[2].id).toEqual('For')
      expect(retVal[3].id).toEqual('Understanding!')
    }
    runTest();
  });
});