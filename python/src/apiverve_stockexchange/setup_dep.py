from setuptools import setup, find_packages

setup(
    name='apiverve_stockexchange',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Stock Exchange identifies trading venues worldwide by Market Identifier Code, name, or country. It provides official exchange names, acronyms, host cities, websites, and founding dates, while paid plans add regulatory MIC and LEI identifiers.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/stockexchange?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
