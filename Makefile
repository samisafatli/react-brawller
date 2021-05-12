NPM ?= $(shell which npm)
YARN ?= $(shell which yarn)
PKG_MANAGER ?= $(if $(YARN),$(YARN),$(NPM))

setup:
	@${PKG_MANAGER} install

run:
	@${PKG_MANAGER} start