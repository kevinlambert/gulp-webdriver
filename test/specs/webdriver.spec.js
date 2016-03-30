import assert from 'assert'

describe('grunt-webdriverjs test', () => {
    it('should have right options', () => {
        assert.strictEqual(browser.options.waitforTimeout, 12345)
        assert.strictEqual(browser.options.coloredLogs, true)
        assert.strictEqual(browser.options.updateJob, true)
        assert.strictEqual(browser.options.logLevel, 'command')
        assert.strictEqual(browser.options.cucumberOpts.require, 'nothing')
    })

    it('checks if title contains the search query', () => browser
        .url('/')
        .getTitle((err, title) => {
            assert.equal(err, undefined)
            assert.strictEqual(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs')
        }))
})
