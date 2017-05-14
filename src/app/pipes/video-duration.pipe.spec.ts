import { VideoDurationPipe } from './pipes/video-duration.pipe';

describe('VideoDurationPipe', () => {
  it('create an instance', () => {
    const pipe = new VideoDurationPipe();
    expect(pipe).toBeTruthy();
  });
  describe('when created', () => {
    let pipe;

    beforeEach(() => {
      pipe = new VideoDurationPipe();
    });

    it('should provide the correct transformation', () => {
      const testData = [
        { duration: "PT1H24M9S", value: "1:24:09"},
        { duration: "PT4M43S", value: "4:43"},
        { duration: "PT8H4M20S", value: "8:04:20"},
        { duration: "PT17S", value: "0:17"}
      ]

      testData.forEach((item) => {
        expect(pipe.transform(item.duration)).toBe(item.value);
      });
    });
  })
});
