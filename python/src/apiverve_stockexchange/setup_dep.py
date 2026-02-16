from setuptools import setup, find_packages

setup(
    name='apiverve_stockexchange',
    version='1.1.14',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Stock Exchange is a tool for retrieving information about stock exchanges and trading venues worldwide using ISO 10383 Market Identifier Codes (MIC). It returns exchange details including name, location, website, and classification.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/stockexchange?utm_source=pypi&utm_medium=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
